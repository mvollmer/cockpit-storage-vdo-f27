(function (root, data) {
    var loaded, module;

    /* Load into AMD if desired */
    if (typeof define === 'function' && define.amd) {
        define(data);
        loaded = true;
    }

    /* Load into Cockpit locale */
    if (typeof cockpit === 'object') {
        cockpit.locale(data)
        loaded = true;
    }

    function transformAngular(data, prev) {
        var key, context, parts, value, result = { };
        for (key in data) {
            if (key === "")
                continue;
            parts = key.split("\u0004");
            value = data[key];
            if (parts[1]) {
                context = parts[0];
                key = parts[1];
            } else {
                context = "$$noContext";
                key = parts[0];
            }
            if (value[0] === null)
                value = value[1];
            else
                value = value.slice(1);
            if (!(key in result))
                result[key] = { };
            result[key][context] = value;
        }
        return angular.extend(prev, result);
    }

    /* Load into angular here */
    if (typeof angular === 'object') {
        try {
            module = angular.module(["gettext"]);
        } catch(ex) { console.log(ex); /* Either no angular or angular-gettext */ };
        if (module) {
            loaded = true;
            module.run(['gettextCatalog', function(gettextCatalog) {
                var lang = data[""]["language"];
                var prev = (gettextCatalog.getCurrentLanguage() == lang) ? gettextCatalog.strings : { };
                gettextCatalog.setStrings(lang, transformAngular(data, prev));
                gettextCatalog.setCurrentLanguage(lang);
            }]);
        }
    }

    if (!loaded)
        root.po = data;

/* The syntax of this line is important  by po2json */
}(this, {
 "": {'plural-forms':function(n) {
var nplurals, plural;
nplurals=1; plural=0;
return plural;
},
  "language": "zh-CN",
  "x-generator": "Zanata 3.9.6"
 },
 "$0 Block Device": [
  null,
  "$0 块设备"
 ],
 "$0 Chunk Size": [
  null,
  "$0 区块大小"
 ],
 "$0 Disks": [
  null,
  "$0 磁盘"
 ],
 "$0 data + $1 overhead used of $2 ($3)": [
  null,
  ""
 ],
 "$0 day": [
  "$0 days",
  "$0 天"
 ],
 "$0 disk is missing": [
  "$0 disks are missing",
  "$0 磁盘缺失"
 ],
 "$0 filesystems can not be made larger.": [
  null,
  ""
 ],
 "$0 filesystems can not be made smaller.": [
  null,
  ""
 ],
 "$0 hour": [
  "$0 hours",
  "$0 小时"
 ],
 "$0 is in active use": [
  null,
  "$0 正处于激活使用中"
 ],
 "$0 minute": [
  "$0 minutes",
  "$0 分钟"
 ],
 "$0 month": [
  "$0 months",
  "$0 月"
 ],
 "$0 of $1": [
  null,
  "$1 的 $0"
 ],
 "$0 used of $1 ($2 saved)": [
  null,
  ""
 ],
 "$0 week": [
  "$0 weeks",
  "$0 周"
 ],
 "$0 year": [
  "$0 years",
  "$0 年"
 ],
 "$0, $1 free": [
  null,
  "$0, $1 可用"
 ],
 "$name (from $host)": [
  null,
  "$name (从 $host)"
 ],
 "${size} ${desc}": [
  null,
  "${size} ${desc}"
 ],
 "(default)": [
  null,
  "（默认）"
 ],
 "(none)": [
  null,
  "（无）"
 ],
 "1 MiB": [
  null,
  "1 MiB"
 ],
 "1 day": [
  null,
  "1 天"
 ],
 "1 hour": [
  null,
  "1 小时"
 ],
 "1 week": [
  null,
  "1 周"
 ],
 "128 KiB": [
  null,
  "128 KiB"
 ],
 "16 KiB": [
  null,
  "16 KiB"
 ],
 "2 MiB": [
  null,
  "2 MiB"
 ],
 "32 KiB": [
  null,
  "32 KiB"
 ],
 "4 KiB": [
  null,
  "4 KiB"
 ],
 "5 minutes": [
  null,
  "5 分钟"
 ],
 "512 KiB": [
  null,
  "512 KiB"
 ],
 "6 hours": [
  null,
  "6 小时"
 ],
 "64 KiB": [
  null,
  "64 KiB"
 ],
 "8 KiB": [
  null,
  "8 KiB"
 ],
 "A disk is needed.": [
  null,
  ""
 ],
 "A spare disk needs to be added first before this disk can be removed.": [
  null,
  "该磁盘可以被移除前，需要添加一个备用的磁盘。"
 ],
 "Activate": [
  null,
  "激活"
 ],
 "Activating $target": [
  null,
  "激活 $target"
 ],
 "Add": [
  null,
  "添加"
 ],
 "Add Disks": [
  null,
  "添加磁盘"
 ],
 "Add iSCSI Portal": [
  null,
  "添加 iSCSI 门户"
 ],
 "Adding physical volume to $target": [
  null,
  "添加物理卷至 $target"
 ],
 "Address": [
  null,
  "地址"
 ],
 "Apply": [
  null,
  "应用"
 ],
 "At least $0 disks are needed.": [
  null,
  "至少需要 $0 块磁盘。"
 ],
 "At least one disk is needed.": [
  null,
  "至少需要 1 块磁盘。"
 ],
 "Authentication required": [
  null,
  "需要认证"
 ],
 "Available targets on $0": [
  null,
  "$0 上可用的目标"
 ],
 "Backing Device": [
  null,
  ""
 ],
 "Block": [
  null,
  ""
 ],
 "Block device for filesystems": [
  null,
  "块设备的文件系统"
 ],
 "Blocked": [
  null,
  "受阻"
 ],
 "Can't delete while unlocked": [
  null,
  "解锁时无法删除"
 ],
 "Cancel": [
  null,
  "取消"
 ],
 "Change": [
  null,
  "变更"
 ],
 "Change iSCSI Initiator Name": [
  null,
  "变更 iSCSI Initiator 名称"
 ],
 "Checking $target": [
  null,
  ""
 ],
 "Checking RAID Device $target": [
  null,
  "检查 RAID 设备 $target"
 ],
 "Checking and Repairing RAID Device $target": [
  null,
  "检查并修复 RAID 设备 $target"
 ],
 "Chunk Size": [
  null,
  "区块大小"
 ],
 "Cleaning up for $target": [
  null,
  "清除 $target"
 ],
 "Close": [
  null,
  "关闭"
 ],
 "Compatible with all systems and devices (MBR)": [
  null,
  "兼容所有系统和设备 (MBR)"
 ],
 "Compatible with modern system and hard disks > 2TB (GPT)": [
  null,
  "兼容现代系统，且支持磁盘 > 2TB (GPT)"
 ],
 "Compression": [
  null,
  "压缩"
 ],
 "Confirm passphrase": [
  null,
  "确认口令"
 ],
 "Content": [
  null,
  "内容"
 ],
 "Create": [
  null,
  "创建"
 ],
 "Create Logical Volume": [
  null,
  "创建逻辑卷"
 ],
 "Create Partition": [
  null,
  "创建分区"
 ],
 "Create RAID Device": [
  null,
  "创建 RAID 设备"
 ],
 "Create Snapshot": [
  null,
  "创建快照"
 ],
 "Create Thin Volume": [
  null,
  "创建稀疏卷"
 ],
 "Create VDO Device": [
  null,
  ""
 ],
 "Create Volume Group": [
  null,
  "创建卷组"
 ],
 "Create new Logical Volume": [
  null,
  "创建新逻辑卷"
 ],
 "Create partition": [
  null,
  "创建分区"
 ],
 "Create partition on $0": [
  null,
  "为 $0 创建分区"
 ],
 "Create partition table": [
  null,
  "创建分区表"
 ],
 "Creating RAID Device $target": [
  null,
  "创建 RAID 设备 $target"
 ],
 "Creating filesystem on $target": [
  null,
  "为 $target 创建文件系统"
 ],
 "Creating logical volume $target": [
  null,
  "创建逻辑卷 $target"
 ],
 "Creating partition $target": [
  null,
  "创建分区 $target"
 ],
 "Creating snapshot of $target": [
  null,
  "创建快照 $target "
 ],
 "Creating volume group $target": [
  null,
  "创建卷组 $target"
 ],
 "Custom": [
  null,
  "自定义"
 ],
 "Custom (Enter filesystem type)": [
  null,
  "自定义 (输入文件系统类型)"
 ],
 "Custom encryption options": [
  null,
  ""
 ],
 "Custom mount option": [
  null,
  ""
 ],
 "Custom mount options": [
  null,
  ""
 ],
 "DISK IS FAILING": [
  null,
  "磁盘错误"
 ],
 "Data Used": [
  null,
  "数据已使用空间"
 ],
 "Deactivate": [
  null,
  "未激活"
 ],
 "Deactivating $target": [
  null,
  "停用 $target"
 ],
 "Deduplication": [
  null,
  ""
 ],
 "Default": [
  null,
  "默认"
 ],
 "Delete": [
  null,
  "删除"
 ],
 "Deleting $target": [
  null,
  "删除 $target"
 ],
 "Deleting a RAID device will erase all data on it.": [
  null,
  "删除 RAID 设备将擦除其中的所有数据."
 ],
 "Deleting a VDO device will erase all data on it.": [
  null,
  ""
 ],
 "Deleting a logical volume will delete all data in it.": [
  null,
  "删除逻辑卷将擦除其中的所有数据。"
 ],
 "Deleting a partition will delete all data in it.": [
  null,
  "删除分区将擦除其中的所有数据。"
 ],
 "Deleting a volume group will erase all data on it.": [
  null,
  "删除卷组将擦除其中的所有数据。"
 ],
 "Deleting volume group $target": [
  null,
  "删除卷组 $target"
 ],
 "Device File": [
  null,
  ""
 ],
 "Device is read-only": [
  null,
  "设备只读"
 ],
 "Disk": [
  null,
  "磁盘"
 ],
 "Disk is OK": [
  null,
  "磁盘良好"
 ],
 "Disks": [
  null,
  "磁盘"
 ],
 "Don't overwrite existing data": [
  null,
  "不覆盖已存在数据"
 ],
 "Drive": [
  null,
  "驱动器"
 ],
 "Drives": [
  null,
  "驱动器"
 ],
 "Edit": [
  null,
  "编辑"
 ],
 "Ejecting $target": [
  null,
  "弹出 $target"
 ],
 "Emptying $target": [
  null,
  "清空 $target"
 ],
 "Encrypted $0": [
  null,
  "已加密 $0"
 ],
 "Encrypted EXT4 (LUKS)": [
  null,
  "加密 EXT4 (LUKS)"
 ],
 "Encrypted Logical Volume of $0": [
  null,
  "$0 的已加密逻辑卷"
 ],
 "Encrypted Partition of $0": [
  null,
  "$0 的已加密分区"
 ],
 "Encrypted XFS (LUKS)": [
  null,
  "加密 XFS (LUKS)"
 ],
 "Encrypted volumes can not be resized here.": [
  null,
  ""
 ],
 "Encrypted volumes need to be unlocked before they can be resized.": [
  null,
  ""
 ],
 "Encryption": [
  null,
  "加密"
 ],
 "Encryption Options": [
  null,
  "加密选项"
 ],
 "Erase": [
  null,
  "擦除"
 ],
 "Erasing $target": [
  null,
  "擦除 $target"
 ],
 "Error": [
  null,
  "错误"
 ],
 "Extended Partition": [
  null,
  "扩展分区"
 ],
 "FAILED": [
  null,
  "失败"
 ],
 "Filesystem": [
  null,
  "文件系统"
 ],
 "Filesystem Mounting": [
  null,
  "文件系统挂载"
 ],
 "Filesystem Name": [
  null,
  "文件系统名称"
 ],
 "Filesystem type": [
  null,
  "文件系统类型"
 ],
 "Filesystems": [
  null,
  "文件系统"
 ],
 "Format": [
  null,
  "格式化"
 ],
 "Format $0": [
  null,
  "格式 $0"
 ],
 "Format Disk $0": [
  null,
  "格式化磁盘 $0"
 ],
 "Formatting a disk will erase all data on it.": [
  null,
  "格式化磁盘将擦除其中的所有数据。"
 ],
 "Formatting a storage device will erase all data on it.": [
  null,
  "格式化存储设备将擦除其中的所有数据."
 ],
 "Free": [
  null,
  "可用"
 ],
 "Free Space": [
  null,
  "空闲空间"
 ],
 "Go to now": [
  null,
  "转到现在"
 ],
 "Grow": [
  null,
  ""
 ],
 "Grow Logical Volume": [
  null,
  ""
 ],
 "Grow logical size of $0": [
  null,
  ""
 ],
 "Grow to take all space": [
  null,
  ""
 ],
 "In Sync": [
  null,
  "同步中"
 ],
 "Inactive volume": [
  null,
  "暂停卷"
 ],
 "Index Memory": [
  null,
  ""
 ],
 "Invalid username or password": [
  null,
  "无效的用户名或密码"
 ],
 "Jobs": [
  null,
  "任务"
 ],
 "Local Mount Point": [
  null,
  ""
 ],
 "Lock": [
  null,
  "锁定"
 ],
 "Locking $target": [
  null,
  "锁定 $target"
 ],
 "Logical": [
  null,
  ""
 ],
 "Logical Size": [
  null,
  ""
 ],
 "Logical Volume": [
  null,
  "逻辑卷"
 ],
 "Logical Volume (Snapshot)": [
  null,
  "逻辑卷 (快照)"
 ],
 "Logical Volume of $0": [
  null,
  "$0 的逻辑卷"
 ],
 "Marking $target as faulty": [
  null,
  "标记 $target 出现故障"
 ],
 "Member of RAID Device": [
  null,
  "RAID 设备的成员"
 ],
 "Member of RAID Device $0": [
  null,
  "RAID 设备 $0 的成员"
 ],
 "Metadata Used": [
  null,
  "已使用的元数据"
 ],
 "Modifying $target": [
  null,
  "修改 $target"
 ],
 "Mount": [
  null,
  "挂载"
 ],
 "Mount Options": [
  null,
  "挂载选项"
 ],
 "Mount Point": [
  null,
  "挂载点"
 ],
 "Mount at boot": [
  null,
  ""
 ],
 "Mount options": [
  null,
  ""
 ],
 "Mount point can not be empty": [
  null,
  ""
 ],
 "Mount point cannot be empty.": [
  null,
  ""
 ],
 "Mount point must start with \"/\".": [
  null,
  ""
 ],
 "Mount read only": [
  null,
  ""
 ],
 "Mounted At": [
  null,
  "挂载于"
 ],
 "Mounting": [
  null,
  "挂载"
 ],
 "Mounting $target": [
  null,
  "挂载 $target"
 ],
 "NFS Mount": [
  null,
  "NFS 挂载"
 ],
 "NFS Mounts": [
  null,
  ""
 ],
 "NTFS - Compatible with most systems": [
  null,
  "NTFS - 兼容多数系统"
 ],
 "Name": [
  null,
  "名称"
 ],
 "Name can not be empty.": [
  null,
  "名称不能为空."
 ],
 "Name cannot be empty.": [
  null,
  "名称不能为空。"
 ],
 "Name cannot be longer than 127 characters.": [
  null,
  "名称不能长于127个字符。"
 ],
 "Name cannot contain the character '$0'.": [
  null,
  "名称不能包含字符 '$0'。"
 ],
 "Name cannot contain whitespace.": [
  null,
  "名称不能包含空格。"
 ],
 "New NFS Mount": [
  null,
  ""
 ],
 "Next": [
  null,
  "下一步"
 ],
 "No Filesystem": [
  null,
  "无文件系统"
 ],
 "No Logical Volumes": [
  null,
  "没有逻辑卷"
 ],
 "No NFS mounts set up": [
  null,
  ""
 ],
 "No disks are available.": [
  null,
  "没有可用的磁盘。"
 ],
 "No drives attached": [
  null,
  "没有附件的驱动器"
 ],
 "No free space": [
  null,
  "没有剩余空间"
 ],
 "No iSCSI targets set up": [
  null,
  "没有设置 iSCSI 目标"
 ],
 "No media inserted": [
  null,
  "没有插入媒体"
 ],
 "No partitioning": [
  null,
  "无分区"
 ],
 "No storage set up as RAID": [
  null,
  "没有存储设置为 RAID"
 ],
 "No storage set up as VDO": [
  null,
  ""
 ],
 "No volume groups created": [
  null,
  "没有创建的卷组"
 ],
 "Not found": [
  null,
  "未找到"
 ],
 "Not mounted": [
  null,
  ""
 ],
 "Not running": [
  null,
  "未运行"
 ],
 "Off": [
  null,
  "关"
 ],
 "On": [
  null,
  "开"
 ],
 "Only $0 of $1 are used.": [
  null,
  ""
 ],
 "Operation '$operation' on $target": [
  null,
  "在 $target 操作 '$operation'"
 ],
 "Options": [
  null,
  "选项"
 ],
 "Other Devices": [
  null,
  "其他设备"
 ],
 "Overwrite existing data with zeros": [
  null,
  "使用 0 覆盖已存在数据"
 ],
 "Partition": [
  null,
  "分区"
 ],
 "Partition of $0": [
  null,
  "$0 的分区"
 ],
 "Partitioning": [
  null,
  "分区"
 ],
 "Passphrase": [
  null,
  "口令"
 ],
 "Passphrase cannot be empty": [
  null,
  "密码不能为空"
 ],
 "Passphrases do not match": [
  null,
  "口令不匹配"
 ],
 "Password": [
  null,
  "密码"
 ],
 "Path on Server": [
  null,
  ""
 ],
 "Path on server cannot be empty.": [
  null,
  ""
 ],
 "Path on server must start with \"/\".": [
  null,
  ""
 ],
 "Physical": [
  null,
  ""
 ],
 "Physical Volume": [
  null,
  "物理卷"
 ],
 "Physical Volumes": [
  null,
  "物理卷"
 ],
 "Physical volume of $0": [
  null,
  "$0 的物理卷"
 ],
 "Physical volumes can not be resized here.": [
  null,
  ""
 ],
 "Please confirm deletion of $0": [
  null,
  "请确认删除 $0"
 ],
 "Please confirm stopping of $0": [
  null,
  ""
 ],
 "Pool": [
  null,
  "池"
 ],
 "Pool for Thin Logical Volumes": [
  null,
  "稀疏逻辑卷池"
 ],
 "Pool for Thin Volumes": [
  null,
  "瘦分配卷的池"
 ],
 "Pool for thinly provisioned volumes": [
  null,
  "池的瘦分配配置卷"
 ],
 "Port": [
  null,
  "端口"
 ],
 "Purpose": [
  null,
  "目的"
 ],
 "RAID ($0)": [
  null,
  "RAID ($0)"
 ],
 "RAID 0": [
  null,
  "RAID 0"
 ],
 "RAID 0 (Stripe)": [
  null,
  "RAID 0 (条带)"
 ],
 "RAID 1": [
  null,
  "RAID 1"
 ],
 "RAID 1 (Mirror)": [
  null,
  "RAID 1 (镜像)"
 ],
 "RAID 10": [
  null,
  "RAID 10"
 ],
 "RAID 10 (Stripe of Mirrors)": [
  null,
  "RAID 10 (条带镜像)"
 ],
 "RAID 4": [
  null,
  "RAID 4"
 ],
 "RAID 4 (Dedicated Parity)": [
  null,
  "RAID 4 (奇偶校验)"
 ],
 "RAID 5": [
  null,
  "RAID 5"
 ],
 "RAID 5 (Distributed Parity)": [
  null,
  "RAID 5 (奇偶校验)"
 ],
 "RAID 6": [
  null,
  "RAID 6"
 ],
 "RAID 6 (Double Distributed Parity)": [
  null,
  "RAID 6 (双倍奇偶校验)"
 ],
 "RAID Device": [
  null,
  "RAID 设备"
 ],
 "RAID Device $0": [
  null,
  "RAID 设备 $0"
 ],
 "RAID Devices": [
  null,
  "RAID 设备"
 ],
 "RAID Level": [
  null,
  "RAID 级别"
 ],
 "RAID Member": [
  null,
  "RAID 成员"
 ],
 "Reading": [
  null,
  "读取中"
 ],
 "Reboot": [
  null,
  "重启"
 ],
 "Recovering": [
  null,
  "恢复"
 ],
 "Recovering RAID Device $target": [
  null,
  "恢复 RAID 设备 $target"
 ],
 "Remove device": [
  null,
  ""
 ],
 "Removing $target from RAID Device": [
  null,
  "从 RAID 设备中删除 $target"
 ],
 "Removing physical volume from $target": [
  null,
  "从 $target 删除物理卷"
 ],
 "Rename": [
  null,
  "重命名"
 ],
 "Rename Logical Volume": [
  null,
  "重命名逻辑卷"
 ],
 "Rename Volume Group": [
  null,
  "重命名卷组"
 ],
 "Renaming $target": [
  null,
  "重命名 $target"
 ],
 "Repairing $target": [
  null,
  ""
 ],
 "Resizing $target": [
  null,
  "调整大小 $target"
 ],
 "Running": [
  null,
  "运行中"
 ],
 "SMART self-test of $target": [
  null,
  "$target SMART 自检"
 ],
 "Securely erasing $target": [
  null,
  "安全擦除 $target"
 ],
 "Server": [
  null,
  "服务器"
 ],
 "Server Address": [
  null,
  "服务器地址"
 ],
 "Server address cannot be empty.": [
  null,
  "服务器地址不能为空。"
 ],
 "Server cannot be empty.": [
  null,
  ""
 ],
 "Setting up loop device $target": [
  null,
  "创建 loop 设备 $target"
 ],
 "Shrink": [
  null,
  ""
 ],
 "Shrink Logical Volume": [
  null,
  ""
 ],
 "Size": [
  null,
  "大小"
 ],
 "Size cannot be negative": [
  null,
  "大小不能为负数"
 ],
 "Size cannot be zero": [
  null,
  "大小不能为零"
 ],
 "Size is too large": [
  null,
  "大小太大"
 ],
 "Size must be a number": [
  null,
  "大小必须是一个数字"
 ],
 "Size must be at least $0": [
  null,
  ""
 ],
 "Spare": [
  null,
  "备用"
 ],
 "Start": [
  null,
  "启动"
 ],
 "Start Multipath": [
  null,
  "启用多路径"
 ],
 "Start Scrubbing": [
  null,
  "开始擦除"
 ],
 "Starting RAID Device $target": [
  null,
  "启动 RAID 设备 $target"
 ],
 "Starting swapspace $target": [
  null,
  "启动 swapspace $target"
 ],
 "Stop": [
  null,
  "停止"
 ],
 "Stop Device": [
  null,
  ""
 ],
 "Stop Scrubbing": [
  null,
  "停止擦除"
 ],
 "Stop and remove": [
  null,
  ""
 ],
 "Stop and unmount": [
  null,
  ""
 ],
 "Stopping RAID Device $target": [
  null,
  "停止 RAID 设备 $target"
 ],
 "Stopping swapspace $target": [
  null,
  "停止 swapspace $target"
 ],
 "Storage": [
  null,
  "存储"
 ],
 "Storage Logs": [
  null,
  "存储日志"
 ],
 "Store passphrase": [
  null,
  "存储口令"
 ],
 "Stored Passphrase": [
  null,
  "已存储口令"
 ],
 "Stored passphrase": [
  null,
  "保存的密码"
 ],
 "Swap": [
  null,
  "交换空间"
 ],
 "Synchronizing RAID Device $target": [
  null,
  "同步 RAID 设备 $target"
 ],
 "Targets": [
  null,
  "目标"
 ],
 "The \"storaged\" API is not available on this system.": [
  null,
  "在此系统中, \"storaged\" API 不可用."
 ],
 "The RAID Array is in a degraded state": [
  null,
  "RAID 阵列处于降级状态"
 ],
 "The RAID device must be running in order to add spare disks.": [
  null,
  "为了添加备用的磁盘，RAID 设备必须在运行状态。"
 ],
 "The RAID device must be running in order to remove disks.": [
  null,
  "为了移除磁盘，RAID 设备必须在运行状态。"
 ],
 "The creation of this VDO device did not finish and the device can't be used.": [
  null,
  ""
 ],
 "The filesystem is in use by system services or login sessions.                Proceeding will stop these services and sessions.": [
  null,
  ""
 ],
 "The last disk of a RAID device cannot be removed.": [
  null,
  " RAID 设备中的最后一个磁盘不能被移除。"
 ],
 "The last physical volume of a volume group cannot be removed.": [
  null,
  "不能删除一个卷组的最后一个物理卷。"
 ],
 "The user <b>$0</b> is not permitted to manage storage": [
  null,
  "用户 <b>$0</b> 不允许管理存储"
 ],
 "There are devices with multiple paths on the system, but the multipath service is not running.": [
  null,
  "该系统上有多路径设备，但是多路径服务未运行。"
 ],
 "There is not enough free space elsewhere to remove this physical volume. At least $0 more free space is needed.": [
  null,
  "没有其他足够的空闲空间来移除改物理卷。至少需要 $0 或更多空闲空间。"
 ],
 "Thin Logical Volume": [
  null,
  "稀疏逻辑卷"
 ],
 "This NFS mount is in use and only its options can be changed.": [
  null,
  ""
 ],
 "This VDO device does not use all of its backing device.": [
  null,
  ""
 ],
 "This device has filesystems that are currently in use.                Proceeding will unmount all filesystems on it.": [
  null,
  "该设备有正在使用的文件系统。               程序将卸载其上的所有文件系统。"
 ],
 "This device is currently used for RAID devices.": [
  null,
  "该设备正在被 RAID 设备使用。"
 ],
 "This device is currently used for RAID devices.                Proceeding will remove it from its RAID devices.": [
  null,
  "该设备正在被 RAID 设备使用。                程序将从其 RAID 设备中移除它。"
 ],
 "This device is currently used for VDO devices.": [
  null,
  ""
 ],
 "This device is currently used for volume groups.": [
  null,
  "该设备正在被卷组使用。"
 ],
 "This device is currently used for volume groups.                Proceeding will remove it from its volume groups.": [
  null,
  "该设备正在被卷组使用。                程序将从其卷组中移除它。"
 ],
 "This disk cannot be removed while the device is recovering.": [
  null,
  "当磁盘正在恢复时，该磁盘不能被移除。"
 ],
 "This volume needs to be activated before it can be resized.": [
  null,
  ""
 ],
 "Transfer data asynchronously": [
  null,
  ""
 ],
 "Type": [
  null,
  "类型"
 ],
 "UUID": [
  null,
  "UUID"
 ],
 "Unable to reach server": [
  null,
  "无法到达服务器"
 ],
 "Unable to remove mount": [
  null,
  ""
 ],
 "Unable to unmount filesystem": [
  null,
  ""
 ],
 "Unknown": [
  null,
  "未知"
 ],
 "Unknown ($0)": [
  null,
  "未知 ($0)"
 ],
 "Unknown host name": [
  null,
  "未知主机名"
 ],
 "Unlock": [
  null,
  "未锁定"
 ],
 "Unlock at boot": [
  null,
  ""
 ],
 "Unlock read only": [
  null,
  ""
 ],
 "Unlocking $target": [
  null,
  "解锁 $target"
 ],
 "Unmount": [
  null,
  "卸载"
 ],
 "Unmounting $target": [
  null,
  "卸载 $target"
 ],
 "Unrecognized Data": [
  null,
  "无法识别的数据"
 ],
 "Unrecognized data can not be made smaller here.": [
  null,
  ""
 ],
 "Unsupported volume": [
  null,
  "不支持的卷"
 ],
 "Usage": [
  null,
  "使用情况"
 ],
 "Use 512 Byte emulation": [
  null,
  ""
 ],
 "Used": [
  null,
  "已使用"
 ],
 "Username": [
  null,
  "用户名"
 ],
 "VDO Backing": [
  null,
  ""
 ],
 "VDO Device": [
  null,
  ""
 ],
 "VDO Device $0": [
  null,
  ""
 ],
 "VDO Devices": [
  null,
  ""
 ],
 "VDO backing devices can not be made smaller": [
  null,
  ""
 ],
 "VFAT - Compatible with all systems and devices": [
  null,
  "VFAT - 兼容所有系统和设备"
 ],
 "Very securely erasing $target": [
  null,
  "多重安全擦除 $target"
 ],
 "Volume": [
  null,
  "卷"
 ],
 "Volume Group": [
  null,
  "卷组"
 ],
 "Volume Group $0": [
  null,
  "卷组 $0"
 ],
 "Volume Groups": [
  null,
  "卷组"
 ],
 "Write-mostly": [
  null,
  "Write-mostly"
 ],
 "Writing": [
  null,
  "写入中"
 ],
 "XFS - Red Hat Enterprise Linux 7 default": [
  null,
  "XFS - Red Hat Enterprise Linux 7 默认"
 ],
 "[$0 bytes of binary data]": [
  null,
  "[$0 字节二进制数据]"
 ],
 "[binary data]": [
  null,
  "[二进制数据]"
 ],
 "[no data]": [
  null,
  "[没有数据]"
 ],
 "ext4 - Red Hat Enterprise Linux 6 default": [
  null,
  "ext4 - Red Hat Enterprise Linux 6 默认"
 ],
 "iSCSI Targets": [
  null,
  "iSCSI 目标"
 ],
 "unknown target": [
  null,
  "未知目标"
 ],
 "unpartitioned space on $0": [
  null,
  "$0 上未分区的空间"
 ],
 "storage-id-desc\u0004$0 File System": [
  null,
  "$0 文件系统"
 ],
 "storage-id-desc\u0004Encrypted data": [
  null,
  "加密的数据"
 ],
 "storage-id-desc\u0004Other Data": [
  null,
  "其他数据"
 ],
 "storage-id-desc\u0004Swap Space": [
  null,
  "Swap 空间"
 ],
 "storage-id-desc\u0004Unrecognized Data": [
  null,
  "无法识别的数据"
 ],
 "storage-id-desc\u0004VDO Backing": [
  null,
  ""
 ],
 "storage\u0004Drive": [
  null,
  "驱动器"
 ],
 "storage\u0004Hard Disk": [
  null,
  "机械硬盘"
 ],
 "storage\u0004Optical Drive": [
  null,
  "光盘驱动器"
 ],
 "storage\u0004Removable Drive": [
  null,
  "可移动驱动器"
 ],
 "storage\u0004Solid-State Disk": [
  null,
  "固态硬盘"
 ],
 "format-bytes\u0004bytes": [
  null,
  "字节"
 ]
}));
