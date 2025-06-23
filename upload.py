# upload.py

import subprocess

def run_command(command):
    try:
        subprocess.run(command, check=True)
    except subprocess.CalledProcessError as e:
        print(f"❌ Error: {e}")

def main():
    print("🔧 GitHub Push Script with Manual Commit Message")

    # Step 1: Stage all changes
    print("📁 Adding all files...")
    run_command(["git", "add", "."])

    # Step 2: Let user input commit message in terminal editor
    print("📝 Opening editor for commit message...")
    run_command(["git", "commit"])  # opens default editor

    # Step 3: Push to GitHub
    print("🚀 Pushing to origin...")
    run_command(["git", "push", "origin"])

    print("✅ Push complete!")

if __name__ == "__main__":
    main()
