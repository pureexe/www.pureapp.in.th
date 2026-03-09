
## Install OS

### Fix yum

```
cp /etc/yum.repos.d/CentOS-Base.repo /etc/yum.repos.d/CentOS-Base.repo.bak
```

แก้ /etc/yum.repos.d/CentOS-Base.repo โดยการเอา filezila ไปทับด้วย

https://el7.repo.almalinux.org/centos/CentOS-Base.repo

```
curl --tlsv1.2 -L -o /etc/yum.repos.d/CentOS-Base.repo https://raw.githubusercontent.com/AtlasGondal/centos7-eol-repo-fix/main/CentOS-Base.repo
```
```

yum clean all
yum makecache
yum update
```

```
yum check
```

คัดลอก tar

แก้ permission

mkdir -p /var/mmfs/ssl/stage
mkdir -p /var/mmfs/gen
mkdir -p /var/mmfs/tmp

chmod 755 /var/mmfs
chmod 700 /var/mmfs/ssl
chmod 700 /var/mmfs/ssl/stage

ลง dependency ที่ gpfs ใช้
yum install -y perl ksh python rsync openssh-clients

โหลด linker

echo "/usr/lpp/mmfs/lib" > /etc/ld.so.conf.d/gpfs.conf
ldconfig

nano pure-gateway-nfs

mmaddnode -N gatewaynode.txt

เพิ่ม LICENSE

mmchlicense client --accept -N pure-gateway-nfs

คัดลอก setting
scp /var/mmfs/gen/mmsdrfs root@pure-gateway-nfs:/var/mmfs/gen/

chown -R root:root /var/mmfs
chmod -R 700 /var/mmfs/ssl

# rebuild kernel header 
yum update -y kernel
yum install -y kernel-devel kernel-headers gcc gcc-c++


yum install -y kernel-3.10.0-1160.119.1.el7.x86_64 --disableexcludes=all

reboot 


# fix iun support
sed -i 's/file_release_write(fP);/\/\/ file_release_write(fP);/g' /usr/lpp/mmfs/src/gpl-linux/kx.c
echo 'void __x86_return_thunk(void) {}' >> /usr/lpp/mmfs/src/gpl-linux/kdump.c

mmbuildgpl


เปิดใช้ ip forward

sysctl -w net.ipv4.ip_forward=1

ทำให้อยู่ถาวร

จากนั้นแก้ route
ip route add 100.0.0.201/32 via 100.0.5.201
ip route add 100.0.0.202/32 via 100.0.5.202
ip route add 100.0.0.203/32 via 100.0.5.203

ทำให้อยู่ถาวร 

nmcli connection modify eth1 +ipv4.routes "100.0.0.201/32 100.0.5.201"
nmcli connection modify eth1 +ipv4.routes "100.0.0.202/32 100.0.5.202"
nmcli connection modify eth1 +ipv4.routes "100.0.0.203/32 100.0.5.203"

mmsdrrestore -p io1-ib0




จากนั้น mmstartup

ให้ทำการ mount โดย
mmmount all