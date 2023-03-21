# Standalone socket server for [my project](https://github.com/Keshav13142/Student-community)

- I did this cause NextJs hosted on vercel (serverless) does not really support websockets [read moere here](https://vercel.com/docs/concepts/limits/overview#websockets).

- I could have used some service like [Pusher](https://pusher.com/channels), but I did not want to be limited by the free tier.

- So I did this :) . Yes I'm aware it's not as secure as some SaaS alternative but it works for my usecase.

- I initially used Railway to host this, but I beleive they host only in US region (I might be wrong)

- Now I switched to [fly](https://fly.io). Cause it had the region most closest to me (Singapore).

> This is important cause my project and DB is hosted in Mumbai and I wanted something as close to it as possible
