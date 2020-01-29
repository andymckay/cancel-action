## Cancel Action
This Action uses the [GitHub API](https://developer.github.com/v3/actions/workflow_runs/#cancel-a-workflow-run) to cancel the currently running workflow. Example usage:

```yaml
    - name: cancelling
      uses: andymckay/cancel-action@0.2
```

The cancellation might take a few seconds to process, this is most useful when you'd like to cancel a long running build. In combination with the `if` statement, this allows you to cancel the build conditionally.
