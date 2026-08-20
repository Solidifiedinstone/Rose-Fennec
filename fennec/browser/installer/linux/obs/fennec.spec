# Fennec OBS package.
#
# This wraps the prebuilt, Widevine VMP signed Linux tarball produced by the
# Fennec GitHub Actions build. There is no compilation here. The binaries are
# already stripped and VMP signed, so this spec must not strip or otherwise
# modify them: any change to the binaries invalidates the VMP signature and
# breaks DRM playback. That is why all of rpm's post-install binary processing
# is disabled below.
%global __os_install_post %{nil}
%global debug_package %{nil}
%global __strip /bin/true

%global mozappdir /usr/lib/fennec
%global upstream_version @UPSTREAM_VERSION@

# Fennec bundles its own NSS, NSPR, sqlite and so on. Let the package both
# provide and require those internal sonames so they satisfy each other; only
# drop the bundled libonnxruntime, which has no provider.
%global __requires_exclude_from ^%{mozappdir}/.*/libonnxruntime\\.so$

Name:           fennec
Version:        @PACKAGE_VERSION@
Release:        0%{?dist}
Summary:        Fennec, a privacy conscious web browser
License:        MPL-2.0
URL:            https://www.waterfox.net/
Vendor:         BrowserWorks
ExclusiveArch:  @RPM_ARCH@

Source0:        https://cdn.waterfox.com/fennec/releases/%{upstream_version}/Linux_@RPM_ARCH@/fennec-%{upstream_version}.tar.bz2#/fennec-%{version}.tar.bz2
Source2:        fennec.desktop
Source3:        fennec.1
Source4:        package-prefs.js
Source5:        fennec.appdata.xml

# Runtime dependencies are generated automatically from the binaries' shared
# library references (gtk3, X11, and the rest). The bundled sonames self satisfy.

%description
Fennec is a customizable, privacy conscious web browser based on Firefox.

%prep
%setup -q -n fennec -T -b 0

%build
# Nothing to build: prebuilt, VMP signed binaries.

%install
mkdir -p %{buildroot}%{mozappdir}
cp -a . %{buildroot}%{mozappdir}

mkdir -p %{buildroot}%{_bindir}
ln -s %{mozappdir}/fennec %{buildroot}%{_bindir}/fennec

install -D -m 0644 %{SOURCE2} %{buildroot}%{_datadir}/applications/fennec.desktop
install -D -m 0644 %{SOURCE3} %{buildroot}%{_mandir}/man1/fennec.1
install -D -m 0644 %{SOURCE5} %{buildroot}%{_datadir}/metainfo/fennec.appdata.xml
install -D -m 0644 %{SOURCE4} %{buildroot}%{mozappdir}/defaults/pref/package-prefs.js

# Marker so Fennec knows it is a packaged build (the in-app updater is off).
echo "This is a packaged app." > %{buildroot}%{mozappdir}/is-packaged-app

for size in 16 32 48 64 128; do
    install -D -m 0644 \
        %{buildroot}%{mozappdir}/browser/chrome/icons/default/default${size}.png \
        %{buildroot}%{_datadir}/icons/hicolor/${size}x${size}/apps/fennec.png
done

%files
%dir %{mozappdir}
%{mozappdir}/*
%{_bindir}/fennec
%{_datadir}/applications/fennec.desktop
%{_mandir}/man1/fennec.1*
%{_datadir}/metainfo/fennec.appdata.xml
%{_datadir}/icons/hicolor/*/apps/fennec.png

%changelog
* Wed Jun 17 2026 BrowserWorks <MrAlex94@users.noreply.github.com> - @PACKAGE_VERSION@-0
- Packaged release.
