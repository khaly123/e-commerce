# upload.py
import subprocess

def run_command(command):
    try:
        subprocess.run(command, check=True)
    except subprocess.CalledProcessError as e:
        print(f"❌ Error: {e}")

def main():
    print("🔧 GitHub Push Script with Manual Commit Message")

    print("📁 Adding all files...")
    run_command(["git", "add", "."])

    print("📝 Opening editor for commit message...")
    run_command(["git", "commit"])  # Opens your default Git editor

    print("🚀 Pushing to origin/master...")
    run_command(["git", "push", "--set-upstream", "origin", "master"])

    print("✅ Push complete!")

if __name__ == "__main__":
    main()