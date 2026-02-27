
---
layout: post
title: ติดตั้ง lmod module ด้วย EasyBuild
date: '2026-02-22T13:29:00.000+07:00'
author: Pakkapon Phongthawee
tags:
- computer
modified_time: '2026-02-22T13:29:00.000+07:00'
---

ก่อนอื่นเราได้ทำการติดตั้ง lmod เข้ามาในเครื่องโดยใช้คำสั่ง

```
dnf install lmod
```
 
จากนั้นจะทำการติดตั้ง easybuild โดยเราจะทำให้ easybuild ดังกล่าวใช้งานข้ามเครื่องได้ 

ก่อนอื่นเราจะสร้าง account ชื่อ modules ออกมาก่อนเพื่อทำการจัดการ modules

แล้วทำการ login เข้าเป็น modules

sudo -u modules -i

จากนั้นทำการสร้าง folder ปลายทางขึ้นมา โดยที่นี้จะใช้

```
/ist-flash/apps/modules
```

เราจะทำการติดตั้ง easybuild ไว้ใน venv ที่

```
/ist-flash/apps/modules/easybuild
```

ด้วยคำสั่งดังนี้
```
mkdir -p /ist-flash/apps/modules/easybuild
python3 -m venv /ist-flash/apps/modules/easybuild/venv
source /ist-flash/apps/modules/easybuild/venv/bin/activate
pip install --upgrade pip
pip install easybuild
```

จากนั้นตรวจสอบว่าติดตั้งคำสั่งนี้สำเร็จไหมด้วย
```
eb --version
```

ถ้าสำเร็จจะขึ้นมาแบบนี้
```
This is EasyBuild 5.2.1 (framework: 5.2.1, easyblocks: 5.2.1) on host ist-gpu-16.
```

จากนั้นเราจะสร้าง config file โดยใช้คำสั่ง

```
nano /ist-flash/apps/modules/easybuild/config.cfg
```

ใส่เนื้อหาด้านในดังนี้

```
[config]
prefix = /ist-flash/apps/modules
installpath = /ist-flash/apps/modules
buildpath = /ist-flash/apps/modules/build
sourcepath = /ist-flash/apps/modules/sources
repositorypath = /ist-flash/apps/modules/ebfiles_repo

modules-tool = Lmod
module-syntax = Lua
```

จากนั้นกำหนดให้ easybuild ใช้ config นี้ด้วยการ export ดังนี้


```
export EASYBUILD_CONFIGFILES=/ist-flash/apps/modules/easybuild/config.cfg
```

ตรวจสอบว่ามันใช้ prefix ถูกตัวด้วยคำสั่ง

```
eb --show-config | grep prefix
```

จะต้องแสดงผลว่า

```
prefix          (F) = /ist-flash/apps/modules
```

ลองกำหนด module ให้โหลดดู

```
module use /ist-flash/apps/modules/modules/all
```

ลองสั่ง module av ดู ถ้ายังขึ้นตัวเก่าอยู่ ให้เอาออกไปก่อนโดย 
```
module purge
module unuse /ist/apps/modules/modules/all
```

เมื่อสั่ง module av ใหม่จะขึ้นว่า No module(s) or extension(s) found! เพราะเรายังไม่ได้ติดตั้งอะไร


จากนั้นเริ่มการติดตั้ง toolschain สำหรับ build เนื่องจากเดิมใช้ 2022a มาเราจะยึดตัวนี้ไว้ก่อนเพื่อลดปัญหา

```
eb foss-2022a.eb --robot
```

ถ้าติดตั้งได้สำเร็จไม่ error อะไรก็เริ่มติดตั้งสิ่งที่ต้องการใช้ได้เลย โดยที่นี่เราจะใช้ตามนี้

```
# Anaconda3  (previously, we have 2020, 2023, now we add 2025)
Anaconda3-2020.11.eb
Anaconda3-2023.07-2.eb
Anaconda3-2025.06-1.eb
.
.
.
.
.
.
```

ซึ่งถ้าพิมพ์แยกทุกรอบเหนื่อยตาย เลยจะรวบคำสั่งดังนี้

โดยสามารถรวบคำสั่งได้ดังนี้
```
# Anaconda
eb Anaconda3-2020.11.eb Anaconda3-2023.07-2.eb Anaconda3-2025.06-1.eb --robot --parallel=8
# CUDA
eb CUDA-11.4.1.eb CUDA-11.4.2.eb  CUDA-11.7.0.eb  CUDA-11.8.0.eb  CUDA-12.0.0.eb CUDA-12.1.1.eb  CUDA-12.2.2.eb CUDA-12.3.0.eb CUDA-12.4.0.eb CUDA-12.6.0.eb CUDA-12.8.0.eb CUDA-13.0.0.eb CUDA-13.1.0.eb  --robot --parallel=8 --accept-eula-for=CUDA 
```

```
Arrow
AutoConf
Automake
Autotools
BLIS
Bison
Boost
CMake
CUDA
CppUnit
DB
Doxygen
EasyBuild
Eigen
FFTW
FFMpeg
FlexiBLAS
GCC
GDRCopy
GLFW
GMP
GSL
Guile
HDF5
ICU
Java
LAME
LAMMPS
LLVM
M4
Mako
Mamba
Mesa
Mson
NASM
NCCL
NVHPC
Ninja
OpenBLAS
OpenMPI
OpenSSL
PCRE
PLUMED
PMIx
Perl
Python
RE2
RapidJSON
Rust
SQLite
SalAPCK
SciPy-bundle
Spark
SZip
Tcl
Tk
Tkinter
UCC-CUDA
UCC
UCX-CUDA
UCX
UnZip
Voro++
X11
XML-Parser
XZ
Xvfb
Yasm
archspec
aria2
binutils
bzip2
c-ares
cURL
cuDNN
expat
flex
fontconfig
foss
freelut
freetype
gc
gettext
gifsicle
git
glew
glibc
gompi
gperf
groff
gzip
h5py
help2man
hwloc
hypothesis
intltool
kim-api
libGLU
libarchive
libdrm
libevent
libfabric
libffi
libglvnd
libiconv
libjpeg-turbo
libmatheval
libpciacess
libpng
libreadline
libtool
libunistring
libunwind
libxml2
lz4
make
makeinfo
matplotlib
molmod
ncurses
netCDF
nettle
numactl
patchlf
pixman
pkg-config
pkgconf
pybind11
singularity-xe
snappy
tbb
utf8proc
utiil-linux
x264
x265
xorg-macros
yaff
zlib
zstd
```