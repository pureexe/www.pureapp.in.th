


sudo apt update

sudo nano /etc/sysctl.conf
net.ipv4.ip_forward=1
sudo sysctl -p

verify and should return 1
cat /proc/sys/net/ipv4/ip_forward



sudo wg genkey | sudo tee server_private.key | sudo wg pubkey | sudo tee server_public.key
