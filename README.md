<div align="center">

<img src="assets/readme/hero.gif" width="1200" alt="TEHRAN — rotating 3D geometry" />

**[English](README.md) · [فارسی](README.fa.md)**

<img src="assets/readme/identity.svg" width="1200" alt="web / English and Persian documentation" />

</div>

# TEHRAN

A static cultural/media website with multiple editorial pages, embedded video content and a dark visual theme.

[GitHub](https://github.com/MOHAMMADREZAABEDINPOOR/Tehran) · [PIMX / Profile](https://github.com/MOHAMMADREZAABEDINPOOR) · [Static artwork](assets/readme/hero.png)

## Features

- Home, press, comedy, events and contact pages
- Video embeds and video-configuration notes
- Separate page styles and a shared script
- Responsive HTML/CSS presentation

## Stack

| Tool | Version / source |
|---|---|
| HTML / CSS / JavaScript | `static files` |

## Getting started

A modern browser; Python is optional for the local HTTP server.

```bash
git clone https://github.com/MOHAMMADREZAABEDINPOOR/Tehran.git
cd Tehran

python -m http.server 8000
```

## Configuration

No standard environment template is defined. Standalone exercises need no external configuration; inspect any service constants or paths in the source before running.

## Usage

Open index.html through HTTP, then explore editorial pages. Update embedded-video identifiers using the included video notes.

## Project structure

| Path | Role |
|---|---|
| [`assets/`](assets/) | Brand/media/README assets |
| [`about.html`](about.html) | Project entry/configuration file |
| [`comedy.html`](comedy.html) | Project entry/configuration file |
| [`contact.html`](contact.html) | Project entry/configuration file |
| [`events.html`](events.html) | Project entry/configuration file |
| [`index.html`](index.html) | Project entry/configuration file |
| [`press-detail-2.html`](press-detail-2.html) | Project entry/configuration file |
| [`press-detail-3.html`](press-detail-3.html) | Project entry/configuration file |
| [`press-detail-4.html`](press-detail-4.html) | Project entry/configuration file |
| [`press-detail.html`](press-detail.html) | Project entry/configuration file |
| [`press.html`](press.html) | Project entry/configuration file |
| [`shop.html`](shop.html) | Project entry/configuration file |

## Commands and checks

No automated test command is declared in a manifest. Verify behavior through a local example run.

## Deployment

Publish the directory to an HTTPS static host and verify file paths and external links.

## Limitations

Embedded media requires network access and depends on the hosting provider. Shop/contact pages in a static snapshot do not imply a checkout or messaging backend.

## Troubleshooting

- Missing packages: install dependencies using the project’s package manager.
- API/network failure: check the configured origin, provider and hosting bindings.
- Old assets: rebuild when a build script exists, then clear the browser cache.

## Contributing

Create a focused branch, verify the affected behavior and explain the change clearly. Keep private data, build outputs and local databases out of commits.

## License

No repository-level license file is included in this snapshot. Public visibility alone does not grant reuse rights; contact the repository owner for terms.

---

Part of **PIMX** · Documentation in English and Persian.
