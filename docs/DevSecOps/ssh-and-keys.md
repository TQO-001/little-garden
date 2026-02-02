# 🔑 SSH & Key Management

SSH (Secure Shell) is the "tunnel" a DevOps engineer uses to talk to a server.

## 1. The Mechanic's View
When you run `ssh laughtale@laughtale.co.za`, the following happens:
1. Your computer shows its **Public Key** (`id_rsa.pub`).
2. The server checks its `~/.ssh/authorized_keys` file.
3. If the "puzzle pieces" match, you are granted entry without a password.

## 2. Essential Commands
- `ssh-keygen -t rsa -b 4096`: Generates a new "Lock and Key" pair.
- `cat ~/.ssh/id_rsa.pub`: Shows your public key (the one you give to GitHub).
- `ssh-add -l`: Lists the keys your computer is currently "carrying."

## 3. Server-Side Security
The file `/etc/ssh/sshd_config` controls the front door. 
**DevOps Rule:** Once your keys are set up, always set `PasswordAuthentication no` to stop hackers from guessing your password.