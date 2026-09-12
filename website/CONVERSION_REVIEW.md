# Download, plans, and adoption conversion review

Date: 2026-09-12
Work: `work_14ce5722-218a-4568-8bc6-9bb0df421b12`

## Objective

Prepare the public site for decommissioning `app.getautom8.ae`. The website now
drives three outcomes: download the managed macOS app, choose a plan from the
app's Usage & Billing screen, and introduce AutoM8 through a focused organization
pilot.

## Changes

- Removed every public website URL and CTA targeting `app.getautom8.ae`.
- Made the verified public Apple-silicon DMG the direct Download destination.
- Changed desktop/mobile header actions to View plans and Download AutoM8.
- Changed Home hero, gallery CTA, and closing CTA to Download, with Plans as the
  secondary path.
- Published the approved Free, Individual Pro, Team, additional-member, and top-up pricing;
  checkout remains inside the managed app's Usage & Billing screen.
- Reworked For business leaders around one accountable pilot, a repeatable review
  rhythm, evidence-led expansion, and an organization-plan path.
- Updated Docs to describe the managed desktop account and in-app billing rather
  than the retiring web-account surface.

## Evidence

- Latest release readback: public non-draft `v0.1.0` with arm64 and x64 DMGs.
- `rg` found zero `app.getautom8.ae` or `PRODUCT_URL` references in website source.
- Home, Plans, For business leaders, Docs, and Docs plans/usage routes: HTTP 200.
- `npm --prefix website run lint`: pass.
- `npm --prefix website run build`: pass.
- `npm run lint`: pass.
- `npm run type-check`: pass.
- `git diff --check -- website`: pass.

## Workflow blockers

Spacecrew run `run_80faa1e6-be43-47aa-88d2-d12540eadbcc` could not start because
its existing web service process was unresponsive. Host implementation and checks
succeeded; no controller completion is claimed.

SaveADay Messenger submission was attempted with
`/tmp/autom8-conversion-summary.md` and stable event ID
`work_14ce5722-218a-4568-8bc6-9bb0df421b12-conversion`. It was rejected because
`MESSENGER_FIKR_WEBHOOK_URL` is missing or invalid. No Messenger acceptance or
Fikr delivery is claimed. Retry the unchanged summary and event ID after trusted
configuration is supplied; do not use a fallback ingestion path.
