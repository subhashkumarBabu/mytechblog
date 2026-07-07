---
title: "Git"
topic: "git"
draft: false
generated: "2026-07-07"
sources: "204 tagged links, curated from the 200 most recent (2017\u20132026)"
---

**204 saved links**, 2017–2026 (peak: 2023). Three clear strata: the Azure DevOps years (2018–2022, PR policies and TFVC migrations), the great 2023 learning-resource flood (courses, cheat sheets, branching-strategy debates), and the 2024–2026 layer where Git quietly becomes agent infrastructure — worktrees as agent workspaces, repos as LLM context.

**Related:** [DevOps](/wiki/devops/) · [CI-CD](/wiki/ci-cd/) · [GitOps](/wiki/gitops/) · [Linux & CLI](/wiki/linux-and-cli/) · [AI Agents](/wiki/ai-agents/)

---

## Learn it properly

- [Beej's Guide to Git](https://beej.us/guide/bggit/) — the save says "awesome guide," and it is.
- [Pro Git, the free official book](https://git-scm.com/book/en/v2) · [the Atlassian tutorials](https://www.atlassian.com/git/tutorials) · [an interactive guide with quizzes on syncing with upstream](https://runestone.academy/ns/books/published/gitkit2ed/the-gitkit-book.html).
- ["Learn git concepts, not commands"](https://dev.to/unseenwizzard/learn-git-concepts-not-commands-4gjc) — the right mental model in one article.
- [learngitbranching.js.org](https://learngitbranching.js.org/) and [explain-git-with-d3](https://onlywei.github.io/explain-git-with-d3/) — visual, interactive branching practice.
- Learn by playing: [Git Gud, the command-line game](https://github.com/benthayer/git-gud) · [Learn Git with the help of cats](https://github.com/girliemac/a-picture-is-worth-a-1000-words/tree/main/git-purr).
- [Use Git like a senior engineer](https://levelup.gitconnected.com/use-git-like-a-senior-engineer-ef6d741c898e) · [15 advanced techniques and shortcuts](https://kubesimplify.com/get-good-at-git?source=tw0522).
- [GitHub's own advice: don't memorize a dozen commands on day one](https://github.blog/developer-skills/github/github-for-beginners-getting-started-with-git-and-github-in-vs-code/?utm_source=youtube-episode-8&utm_medium=video&utm_campaign=gfb-s3-2026).

## Internals — how it actually works

- [Git Internals — the CS50 tech talk](https://www.youtube.com/watch?v=lG90LZotrpo&feature=youtu.be) and ["So You Think You Know Git" (FOSDEM 2024)](https://www.youtube.com/watch?v=aolI_Rz0ZqY&feature=youtu.be) — the two canonical talks.
- [Git from the Bottom Up](https://jwiegley.github.io/git-from-the-bottom-up/) — "the best," per your own save.
- [Julia Evans' "How Git Works" zine](https://wizardzines.com/zines/git/) · [Git — Under the Hood](https://www.youtube.com/watch?v=ink9PYoSGc0&feature=youtu.be) (video) · [the internal-architecture deep dive](https://indepth.dev/becoming-a-git-pro-part-1-internal-git-architecture/).
- [how Git stores its data](https://github.blog/open-source/git/gits-database-internals-i-packed-object-store/) and [how `git fetch` synchronizes a disconnected database](https://github.blog/open-source/git/20-years-of-git-2-days-at-github-hq-git-merge-2025-highlights/) — from the GitHub blog's excellent internals series.
- [diffs and patches, explained](https://www.freecodecamp.org/news/github-foundations-certified-exam-prep-guide/) · [demystifying Git submodules](https://www.cyberdemon.org/2024/03/20/submodules.html) · [sparse-checkout for monorepos](https://github.blog/2020-01-17-bring-your-monorepo-down-to-size-with-sparse-checkout/).
- [a university class on teaching yourself Git](https://bernsteinbear.com/isdt/).

## Branching strategies — the eternal debate

- [Martin Fowler's "Patterns for Managing Source Code Branches"](https://martinfowler.com/articles/exploring-gen-ai/humans-and-agents.html) — "branching is easy, merging is harder"; the ebook-length reference. His shorter [Ship / Show / Ask](https://martinfowler.com/articles/exploring-gen-ai/humans-and-agents.html) is the same note in your vault.
- ["Git Flow Is A Bad Idea" — Dave Farley](https://www.youtube.com/watch?v=JOr4QeIjyW4&feature=youtu.be) and [branching strategies vs. trunk-based development](https://launchdarkly.com/blog/git-branching-strategies-vs-trunk-based-development/) — the case for trunk.
- [feature branches? trunk-based? proven patterns compared](https://geshan.com.np/blog/2026/03/git-branching-strategy-for-continuous-delivery/) · ["the best Git branching strategy"](https://craftbettersoftware.com/p/the-best-git-branching-strategy?r=6c23m&utm_campaign=post&utm_medium=web) · [the 2022 strategy survey](https://faun.pub/git-branching-strategies-in-2022-83938c5784d8).
- [trunk-based without the bells and whistles](https://wsbctechnicalblog.github.io/branching-trunk-based.html).

## Git in the agentic era

The newest layer — Git as the substrate AI agents work in.

- Worktrees, the breakout feature: [what git worktrees are and why you should use them](https://github.blog/ai-and-ml/github-copilot/what-are-git-worktrees-and-why-should-i-use-them/) (cassidoo) · ["Do you use them? Does your agent?"](https://medium.com/google-cloud/run-multiple-coding-agents-safely-with-git-worktrees-c2d237dbd6b2) · [a great Git feature in times of agentic AI](https://www.marcohaber.dev/blog/git-worktrees) · [terminal AI agents running in worktrees](https://github.com/2mawi2/schaltwerk/).
- [Simon Willison's "Using Git with coding agents"](https://simonwillison.net/guides/agentic-engineering-patterns/using-git-with-coding-agents/) — the emerging handbook.
- [version control for vibe coders](https://jxnl.co/writing/2025/03/18/version-control-for-the-vibe-coder-part-1/) — Git vs. GitHub, and how to prompt with it.
- [how AI transforms pull requests](https://thoughtworks.medium.com/beyond-vibe-coding-how-ai-can-transform-pull-requests-afef51eae137) · [GitIngest — turn any repo into an LLM-friendly prompt](https://chromewebstore.google.com/detail/gitingest-turn-any-git-re/adfjahbijlkjfoicpjkhjicpjpjfaood?pli=1).
- [a Karpathy-style Git wiki knowledge base at 2.3 GB](https://gist.github.com/garrytan/49c88e83cf8d7ae95e087426368809cb) — Git as agent memory, stress-tested.
- [GitHub Copilot hooks for deterministic workflows](https://johnlokerse.dev/2026/05/18/generate-changelog-videos-with-github-copilot-hooks-and-microsoft-foundry-voice-models/).

## The Azure DevOps years

The professional layer — Git as practiced at the day job.

- [resolving merge conflicts via the PR extension](https://praveenkumarsreeram.com/2022/05/05/azure-devops-tips-and-tricks-6-resolve-merge-conflicts-using-pull-request-merge-conflicts-azure-devops-extension/) and [merging branches through PR approval workflows](https://praveenkumarsreeram.com/2022/10/16/azure-devops-tips-and-tricks-13-how-to-merge-two-branches-using-pull-request-approval-workflow/).
- [enforcing code coverage in pull requests](https://www.benday.com/blog/enforce-code-coverage-as-part-of-pull-requests-in-azure-devops) · [the hidden TFVC-to-Git converter](https://www.benday.com/blog/how-to-predict-the-future-with-azure-devops-flow-metrics) · [modernizing source control: migrating to Git](https://colinsalmcorner.com/post/modernizing-source-control---migrating-to-git).
- [backing up Azure DevOps Git repos](https://charbelnemnom.com/2020/08/how-to-backup-azure-devops-git-repositories/) · [restoring an accidentally deleted branch](https://arunpotti.com/2021/11/30/how-to-restore-a-deleted-git-branch-in-azure-devops/).
- [Terraform modules from Git in Azure DevOps](https://samcogan.com/using-terraform-modules-from-git-in-azure-devops/) — where this tag meets [Infrastructure as Code](/wiki/infrastructure-as-code/).

## Tools & tricks

- [git-tips — the 17k-star tricks collection](https://github.com/git-tips/tips) · [gitexplorer.com](https://gitexplorer.com/) — find the right command without googling.
- [githooks.com](https://githooks.com/) and [a friendly intro to Git hooks](https://dev.to/arindam_1729/understanding-git-hooks-3log).
- [GQL — a SQL-like query language for .git files](https://github.com/AmrDeveloper/GQL) · [onefetch — repo info in the terminal](https://github.com/o2sh/onefetch).
- [OneDev — self-hosted Git server with kanban and CI/CD](https://github.com/theonedev/onedev).
- [detecting leftover conflict markers](https://ardalis.com/detect-git-conflict-markers/#sq_hauy4dfpcw) — the small save that prevents embarrassment.

---

## All links on this topic
