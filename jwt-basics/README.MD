# Node and Express Tutorial

## Contents

1. Node Tutorial
2. Express Tutorial
3. Task Manager
4. Store API

---

## JWT Secret

> **For demo purposes only:** a simple secret value is used.

In production, always use a **long, complex, random, and unguessable secret value**.

Example:

```env
JWT_SECRET=8fA#xL2!mQ9@vP7$zK1^rN5@wB3*YtH6
```

Never hardcode secrets directly in your source code. Store them in a `.env` file and access them using environment variables.