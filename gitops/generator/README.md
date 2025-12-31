# GitOps Generator (`gitops-generator.py`)

## Overview

`gitops-generator.py` is a utility script designed to automate the process of rendering Helm templates for only the changed namespaces in a GitOps-managed Kubernetes environment. It detects which Helmfile-managed namespaces have changed, renders their manifests using `helmfile`, and organizes the output YAMLs in a structured GitOps directory for further processing or deployment.

## Features
- **Automatic Change Detection:** Identifies which namespaces (under `helmfiles/`) have changed in the latest Git commit.
- **Selective Helm Templating:** Only renders Helm templates for changed namespaces, saving time and resources.
- **Structured Output:** Organizes rendered YAMLs by namespace and release in a `gitops/` directory.
- **Multi-document YAML Handling:** Splits multi-document YAMLs into individual files for better management.
- **Temporary File Cleanup:** Cleans up generated temporary files after processing.
- **Error Handling:** Skips namespaces without a `helmfile.yaml` and reports YAML parsing errors.

## Prerequisites
- Python 3.6+
- [Helmfile](https://github.com/roboll/helmfile) installed and available in your `$PATH`
- [Helm](https://helm.sh/) installed
- `PyYAML` Python package (`pip install pyyaml`)
- Git repository with a `helmfiles/` directory containing per-namespace subfolders

## Usage

1. **Navigate to the project root:**
   ```sh
   cd /path/to/your/project
   ```
2. **Run the script:**
   ```sh
   python gitops/generator/gitops-generator.py
   ```

### Optional Environment Variables
- `TMP_DIR`: Temporary directory for Helm template output (default: `templates`)
- `CONCURRENCY`: Number of concurrent Helmfile operations (default: `20`)

Example:
```sh
TMP_DIR=mytmp CONCURRENCY=10 python gitops/generator/gitops-generator.py
```

## How It Works
1. **Detects Changed Namespaces:**
   - Uses `git log` to find which `helmfiles/<namespace>/` folders have changed in the latest commit.
   - Skips folders without a `helmfile.yaml`.
2. **Renders Helm Templates:**
   - Runs `helmfile template` for each changed namespace, outputting to a temporary directory.
3. **Processes Output:**
   - Recursively finds all generated YAML files.
   - Splits multi-document YAMLs and writes each resource to a separate file named `<name>-<kind>.yaml` in `gitops/<namespace>/<release>/`.
4. **Cleans Up:**
   - Waits 5 seconds, then deletes the temporary directory.

## Output Structure
```
gitops/
  <namespace>/
    <release>/
      <resource-name>-<Kind>.yaml
```

## Troubleshooting
- **No changed namespaces detected:**
  - Ensure you have committed changes in `helmfiles/`.
- **Helmfile errors:**
  - Check the output for Helmfile or Helm errors.
- **YAML parse errors:**
  - The script will report files with YAML syntax issues.

## Extending
- You can modify the script to support additional templating options, output formats, or integrate with CI/CD pipelines.

## License
MIT License

## Author
[Your Name]
