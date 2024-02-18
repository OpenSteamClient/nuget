# nuget
Nuget "repo" for OpenSteamworks and OpenSteamClient packages

# Usage
Add this line to your nuget.config `packageSources`
```xml
<add key="OpenSteamClient Github Nuget" value="https://raw.githubusercontent.com/OpenSteamClient/nuget/master/index.json" />
```

# Why not GH Packages?
- Requires auth for downloading public packages
- Has a max download of 500MB per month total (should be infinite)

# Why not NuGet.org?
NuGet would be ideal, since it's the default, has verified namespaces, etc.
However:
- Requires a paid certificate to sign packages (should be free)
- Requires a unique email for an organization
- No deleting packages
