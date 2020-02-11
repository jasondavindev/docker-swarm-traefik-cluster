# Docker Swarm Proof of Conecpt

This repository creates a cluster with two node.js applications (6 replicas), traefik container for route cluster containers, visualizer for view docker containers on cluster, nginx and whoami.

## Running

Run:

```bash
source dev.sh
```

Create machines cluster:

```bash
create_machines
```

Set cluster configuration:

```bash
start_cluster
```

Build app images:

```bash
build_images
```

Up cluster

```bash
start_deploy
```

Set `CLUSTER_WORKERS` on `dev.sh` for increase cluster machines (default 1).

Set `CLUSTER_DNS` on `dev.sh` for change cluster host (default domain.local).

Access:

- http://domain.local:9001 - view cluster instances
- http://domain.local - nginx
- http://domain.local/whoami - whoami
- http://domain.local/app - app
- http://domain.local/app2 - app2
- http://domain.local:8080 - traefik dashboard
