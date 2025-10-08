---
생성일: "2025-10-09T16:26:00.000Z"
Last edited time: "2025-10-09T11:58:00.000Z"
태그: ["Remind"]
pid: "c37c989f-7c24-4a52-8c7b-6888b58d59fb"
title: "Install CUDA Toolkit without SUDO Permision"
slug: "install-cuda-toolkit-without-sudo-permission"
last_edited_time: "2025-10-09T11:58:00.000Z"
---

### 1. Download CUDA Toolkit Run file
`wget <.run file web path>`
### 2. Input Command with option
`sh /PATH/TO/RUN_FILE --silent --toolkit --toolkitpath=/ABS_PATH/TO/SAVE_CUDA`
### 3. Update `~/.bashrc`