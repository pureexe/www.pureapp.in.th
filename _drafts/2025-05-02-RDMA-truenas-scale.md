---
layout: post
title: ติดตั้ง RDMA - Truenas
date: '2025-05-02T00:09:06.000+07:00'
author: Pakkapon Phongthawee
tags:
- computer
thumbnail: /assets/images/thumbnail/first-thin-itx.jpg
modified_time: '2025-05-02T00:09:06.000+07:00'
---


ติดตั้ง dev-tool เพื่อให้ใช้ apt ได้

install-dev-tools

ติดตั้ง infiniband และ RDMA

sudo apt update
sudo apt install rdma-core ibverbs-utils perftest infiniband-diags

ตรวจสอบ ib

root@truenas[~]# lsmod | grep mlx5
mlx5_ib               487424  0
ib_uverbs             200704  2 rdma_ucm,mlx5_ib
ib_core               516096  10 rdma_cm,ib_ipoib,rpcrdma,iw_cm,ib_iser,ib_umad,rdma_ucm,ib_uverbs,mlx5_ib,ib_cm
mlx5_core            2138112  1 mlx5_ib
mlxfw                  36864  1 mlx5_core
pci_hyperv_intf        12288  1 mlx5_core


f

root@truenas[~]# ibv_devinfo
hca_id: mlx5_0
        transport:                      InfiniBand (0)
        fw_ver:                         16.21.3002
        node_guid:                      9c52:f803:008e:e848
        sys_image_guid:                 9c52:f803:008e:e848
        vendor_id:                      0x02c9
        vendor_part_id:                 4119
        hw_ver:                         0x0
        board_id:                       HUA0000000005
        phys_port_cnt:                  1
                port:   1
                        state:                  PORT_ACTIVE (4)
                        max_mtu:                4096 (5)
                        active_mtu:             4096 (5)
                        sm_lid:                 8
                        port_lid:               70
                        port_lmc:               0x00
                        link_layer:             InfiniBand


SHOW RDMA 
root@truenas[~]# rdma link show
link mlx5_0/1 subnet_prefix fe80:0000:0000:0000 lid 70 sm_lid 8 lmc 0 state ACTIVE physical_state LINK_UP