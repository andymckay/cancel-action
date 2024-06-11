## Cancel Action
This Action uses the [GitHub API](https://developer.github.com/v3/actions/workflow_runs/#cancel-a-workflow-run) to cancel the currently running workflow. Example usage:

```yaml
    - name: cancelling
      uses: andymckay/cancel-action@0.4
```

The cancellation might take a few seconds to process, this is most useful when you'd like to cancel a long running build. In combination with the `if` statement, this allows you to cancel the build conditionally.

## Contributing

We welcome contributions to improve the Cancel Action! To get started, please follow these guidelines:

1. Fork the repository and clone it locally.
2. Create a new branch for your changes: `git checkout -b feature/your-feature-name`.
3. Install the required npm packages by running the following command:
  ```
  npm install
  ```
4. Make your changes and test them thoroughly.
5. Build the distributable JS code by running the following command:
  ```
  npm run build
  ```
6. Commit your changes: `git commit -m "Add your commit message"`.
7. Push your changes to your forked repository: `git push origin feature/your-feature-name`.
8. Open a pull request against the main repository's `master` branch.

Please ensure to provide a clear description of your changes in the pull request.
