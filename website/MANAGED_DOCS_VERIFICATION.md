# Managed AutoM8 documentation verification

Date: 2026-09-12
Work: `work_018e2999-f6ea-4401-bcad-1012d90c2e07`

## Scope

Replaced the five-card `/docs` marketing page with a documentation experience
for the managed AutoM8 product. The public information architecture includes:

- Getting started
- Account and access
- Projects and saving
- User flows
- Screen generation and refinement
- Design systems
- Preview and review
- Figma handoff
- Static build and export
- Plans, credits, and usage
- Troubleshooting

The documentation is centered on the managed desktop app, including its account,
Usage & Billing, and project workflow. It does not document AutoM8 Open, local model/provider setup,
provider credentials, private runtime internals, cloud project editing, or an
unconfigured public-publishing service.

## Product grounding

Copy was checked against `.spacecrew/knowledge/product-basics.md`,
`.spacecrew/knowledge/foundation-basics.md`, `docs/autom8-implementation.md`,
the desktop sign-in implementation, workspace header controls, and PublishSheet.
The export guide accurately describes save, build, exact-export preview, and
folder export. It states that public publishing remains unavailable until an
administrator configures a hosting service.

## Verification

- `npm --prefix website run lint`: pass
- `npm --prefix website run build`: pass
- `npm run lint`: pass
- `npm run type-check`: pass
- `/docs` and all 11 direct topic URLs: HTTP 200 on the local preview
- Shared navigation marks every `/docs/<topic>` route as Docs
- Search indexes topic titles, descriptions, and groups
- Mobile documentation navigation uses an accessible expanded/collapsed control
- Shared desktop/mobile navigation and the footer retain a Download link to the
  current Apple-silicon DMG in `Bigmints-com/autom8-releases`
- The Docs overview offers Download for macOS beside the plans link

The release destination was read back from GitHub before use: latest public,
non-draft, non-prerelease release `v0.1.0` contains both arm64 and x64 DMGs.

## Workflow state

Spacecrew controller run `run_a290be42-1b6b-4a6c-902a-bf9db9365b67` could not
start because its existing web service process was unresponsive. Host-side
implementation and verification continued; no controller completion is claimed.

The SaveADay Messenger summary was attempted with
`/tmp/autom8-managed-docs-summary.md` and stable event ID
`work_018e2999-f6ea-4401-bcad-1012d90c2e07-managed-docs`. The script rejected
the request because `MESSENGER_FIKR_WEBHOOK_URL` is missing or invalid. No
Messenger acceptance or Fikr delivery is claimed. Retry the unchanged summary
and event ID after trusted Messenger configuration is supplied.
