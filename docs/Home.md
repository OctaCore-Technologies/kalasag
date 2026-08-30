---
title: Home
tags:
  - moc
---

# KALASAG Knowledge Base

> [!abstract] What is KALASAG?
> A low-cost, field-durable LoRa mesh relay system for disaster response — relay nodes extend communication coverage into signal-dead areas, a coordination console guides the deploying team on where to place the next node, and a field companion app lets the responder register and position each node as it's dropped.

> [!info] We're 8 people, keep this light
> Fronts are 2–4 people and meetings are almost always the whole team, so this vault doesn't need attendee tracking, sign-off workflows, or department silos. Short notes, real links, done — don't add process for its own sake.

## Start here

- [[Architecture/System Overview|Architecture: System Overview]]
- [[Decisions/0001-record-architecture-decisions|Architecture Decisions (ADRs)]]
- [[Teams/Web|Teams]]: [[Teams/Web|Web]] · [[Teams/Mobile|Mobile]] · [[Teams/Firmware|Firmware]]
- [[Meetings/Templates/Meeting Note Template|Meeting notes]]
- [[Glossary]]

## Code, not knowledge

For anything that changes with the code itself — setup steps, running locally, build scripts — go to the component README, not this vault:

- [web/README.md](../web/README.md)
- [mobile/README.md](../mobile/README.md)
- [firmware/README.md](../firmware/README.md)
- [shared/docs/mqtt-payload-schema.md](../shared/docs/mqtt-payload-schema.md)

## Rule of thumb

If it would go stale the moment someone refactors a file, it belongs in a README next to the code. If it explains *why* a decision was made or *who* owns what, it belongs here.
