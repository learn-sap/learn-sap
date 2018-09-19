vuepress build docs

if($LASTEXITCODE -eq 0)
{
    $originalLocation = Get-Location
    Set-Location -Path .\docs\.vuepress\dist
    git init
    git add .
    git commit -m "Bismillah"
    git remote add origin "https://github.com/learn-sap/learn-sap.github.io.git"
    git push origin master --force
    Set-Location $originalLocation  
}

