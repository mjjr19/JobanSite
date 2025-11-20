# GitHub Repository Setup Instructions

## After creating the repository on GitHub.com:

Run these commands in your terminal (replace YOUR_USERNAME with your GitHub username):

```powershell
cd "C:\Users\mjjun\OneDrive\Abi Photos\SheikhMohamadJoban\sheikhJoban-website"

# Add the remote repository (replace YOUR_USERNAME with your actual GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/sheikhJoban-website.git

# Rename branch to main (if needed)
git branch -M main

# Push your code to GitHub
git push -u origin main
```

## Alternative: Using SSH (if you have SSH keys set up)

```powershell
git remote add origin git@github.com:YOUR_USERNAME/sheikhJoban-website.git
git branch -M main
git push -u origin main
```

## If you need to authenticate:

- For HTTPS: You'll be prompted for your GitHub username and a Personal Access Token (not your password)
- For SSH: Make sure your SSH key is added to your GitHub account

