---
layout: post
title: SLURM ตั้ง low priority ด้วยระบบ preempt
date: '2025-09-05T14:55:06.000+07:00'
author: Pakkapon Phongthawee
lang: th
tags:
- คอมพิวเตอร์
thumbnail: ""
modified_time: '2025-09-05T14:55:06.000+07:00'
---

วันนี้จะมาเล่าเรื่องการติดตั้ง proxmox ด้วย ip เดียว

# setup proxmox with one ip


1.แก้ sysctl.d
echo "net.ipv4.ip_forward=1" > /etc/sysctl.d/99-proxmox.conf


sysctl --system

2 forward internet 
iptables -t nat -A POSTROUTING -s 192.168.1.0/24 -o vmbr0 -j MASQUERADE
iptables -A FORWARD -i vmbr0 -o vmbr2 -m state --state RELATED,ESTABLISHED -j ACCEPT
iptables -A FORWARD -i vmbr2 -o vmbr0 -j ACCEPT







3. forward ssh

# Forward traffic from host port 10102 to CT
iptables -t nat -A PREROUTING -p tcp --dport 10102 -j DNAT --to-destination 192.168.1.102:22

# Allow forwarding
iptables -A FORWARD -p tcp -d 192.168.1.102 --dport 22 -m state --state NEW,ESTABLISHED,RELATED -j ACCEPT

# Masquerade (for proper NAT)
iptables -t nat -A POSTROUTING -p tcp -d 192.168.1.102 --dport 22 -j MASQUERADE

# บันทึก


apt install iptables-persistent
netfilter-persistent save 

// netfliter-presistent auto apply when reboot


