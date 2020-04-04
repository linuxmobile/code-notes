---
title: Change Commit Date
emoji: 🔀
tags:
  - git
---

## Powershell

```powershell
$commitDateString = "Wed 01 Jan 2020 00:00:00 -100"
$env:GIT_COMMITTER_DATE = $commitDateString
git commit --amend --no-edit --date $commitDateString
```

## Bash

```bash
GIT_COMMITTER_DATE="Wed 01 Jan 2020 00:00:00 -100" git commit --amend --no-edit --date "Wed 01 Jan 2020 00:00:00 -100"
```
