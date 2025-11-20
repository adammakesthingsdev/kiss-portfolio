This is the (hopefully) final iteration of my personal portfolio and blog.

Live at [admk.dev](https://admk.dev).

## About this site
This is far from my first portfolio website, and there's no guarantee it won't be my last - if you scroll through my public repositories, you'll see I have a bad habit of starting work on some incredibly ambitious personal portfolio website, often with very "extra" features like a custom databased CMS, all to leave it for a few weeks and restart from scratch. In response, I've made this website about as bare-bones as it can while looking decent and giving the information it needs to - no unnecessary feature bloat for a personal website. "Keep it simple, stupid!"

For fast development, this site is built with NextJS and Tailwind CSS, with Typescript as my language of choice. Deployment is facilitated with Docker and Docker Compose containerization.

## Deployment
I love to self-host my projects whenever possible, and this website is no exception.

### Containerization
For both development and production, this project uses Docker and Docker Compose for containerization. A Github Actions CI/CD automatically builds and compiles the Typescript into a static website, then pushes the created Docker image to the Github Container Registry. This created image can be pulled and ran on any machine with Docker.

### Hosting
This website runs locally on my homelab, which uses the Proxmox virtualization stack. It's deployed in an LXC with Docker and a Github Actions runner to ensure the latest deployed version is always up.

Regrettably, I've needed to make a sacrifice of "selfhosted-ness" for security reasons. While my homelab has access to a public IP address, I have chosen to not point my site directly to that to preserve some semblance of privacy and security. Instead, I use a Cloudflare Tunnel to privately and securely proxy website traffic to my local network. This has the added benefit of letting me not worry about DDoS/vulnerabilities, as the only exposed ports and services are (hopefully!) not vulnerable to attack.