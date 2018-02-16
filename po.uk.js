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
nplurals=3; plural=(n%10==1 && n%100!=11 ? 0 : n%10>=2 && n%10<=4 && (n%100<10 || n%100>=20) ? 1 : 2);
return plural;
},
  "language": "uk",
  "x-generator": "Zanata 3.9.6"
 },
 "$0 Block Device": [
  null,
  "$0, блоковий пристрій"
 ],
 "$0 Chunk Size": [
  null,
  "Розмір фрагмента $0"
 ],
 "$0 Disks": [
  null,
  "Диски $0"
 ],
 "$0 data + $1 overhead used of $2 ($3)": [
  null,
  "$0 даних + $1 додатково використано з $2 ($3)"
 ],
 "$0 day": [
  "$0 days",
  "$0 день",
  "$0 дні",
  "$0 днів"
 ],
 "$0 disk is missing": [
  "$0 disks are missing",
  "Не вистачає $0 диска",
  "Не вистачає $0 дисків",
  "Не вистачає $0 дисків"
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
  "$0 година",
  "$0 години",
  "$0 годин"
 ],
 "$0 is in active use": [
  null,
  "$0 активно використовується"
 ],
 "$0 minute": [
  "$0 minutes",
  "$0 хвилина",
  "$0 хвилини",
  "$0 хвилин"
 ],
 "$0 month": [
  "$0 months",
  "$0 місяць",
  "$0 місяці",
  "$0 місяців"
 ],
 "$0 of $1": [
  null,
  "$0 з $1"
 ],
 "$0 used of $1 ($2 saved)": [
  null,
  "$0 використано з $1 ($2 заощаджено)"
 ],
 "$0 week": [
  "$0 weeks",
  "$0 тиждень",
  "$0 тижні",
  "$0 тижнів"
 ],
 "$0 year": [
  "$0 years",
  "$0 рік",
  "$0 роки",
  "$0 років"
 ],
 "$0, $1 free": [
  null,
  "$0, вільно $1"
 ],
 "$name (from $host)": [
  null,
  "$name (з $host)"
 ],
 "${size} ${desc}": [
  null,
  "${size} ${desc}"
 ],
 "(default)": [
  null,
  "(типовий)"
 ],
 "(none)": [
  null,
  "(немає)"
 ],
 "1 MiB": [
  null,
  "1 МіБ"
 ],
 "1 day": [
  null,
  "1 день"
 ],
 "1 hour": [
  null,
  "1 година"
 ],
 "1 week": [
  null,
  "1 тиждень"
 ],
 "128 KiB": [
  null,
  "128 КіБ"
 ],
 "16 KiB": [
  null,
  "16 КіБ"
 ],
 "2 MiB": [
  null,
  "2 МіБ"
 ],
 "32 KiB": [
  null,
  "32 КіБ"
 ],
 "4 KiB": [
  null,
  "4 КіБ"
 ],
 "5 minutes": [
  null,
  "5 хвилин"
 ],
 "512 KiB": [
  null,
  "512 КіБ"
 ],
 "6 hours": [
  null,
  "6 годин"
 ],
 "64 KiB": [
  null,
  "64 КіБ"
 ],
 "8 KiB": [
  null,
  "8 КіБ"
 ],
 "A disk is needed.": [
  null,
  "Потрібен диск."
 ],
 "A spare disk needs to be added first before this disk can be removed.": [
  null,
  "Перш ніж вилучати цей диск, слід додати резервний диск."
 ],
 "Activate": [
  null,
  "Задіяти"
 ],
 "Activating $target": [
  null,
  "Активуємо $target"
 ],
 "Add": [
  null,
  "Додати"
 ],
 "Add Disks": [
  null,
  "Додати диски"
 ],
 "Add iSCSI Portal": [
  null,
  "Додати портал iSCSI"
 ],
 "Adding physical volume to $target": [
  null,
  "Додаємо фізичний том до $target"
 ],
 "Address": [
  null,
  "Адреса"
 ],
 "Apply": [
  null,
  "Застосувати"
 ],
 "At least $0 disks are needed.": [
  null,
  "Потрібно принаймні $0 дисків."
 ],
 "At least one disk is needed.": [
  null,
  "Потрібен принаймні один диск."
 ],
 "Authentication required": [
  null,
  "Слід пройти розпізнавання"
 ],
 "Available targets on $0": [
  null,
  "Доступні призначення на $0"
 ],
 "Backing Device": [
  null,
  "Резервний пристрій"
 ],
 "Block": [
  null,
  "Блок"
 ],
 "Block device for filesystems": [
  null,
  "Блоковий пристрій для файлових систем"
 ],
 "Blocked": [
  null,
  "Заблоковано"
 ],
 "Can't delete while unlocked": [
  null,
  "Не можна вилучати, доки розблоковано"
 ],
 "Cancel": [
  null,
  "Скасувати"
 ],
 "Change": [
  null,
  "Змінити"
 ],
 "Change iSCSI Initiator Name": [
  null,
  "Змінити назву ініціатора iSCSI"
 ],
 "Checking $target": [
  null,
  ""
 ],
 "Checking RAID Device $target": [
  null,
  "Перевіряємо пристрій RAID $target"
 ],
 "Checking and Repairing RAID Device $target": [
  null,
  "Перевіряємо і відновлюємо пристрій RAID $target"
 ],
 "Chunk Size": [
  null,
  "Розмір фрагмента"
 ],
 "Cleaning up for $target": [
  null,
  "Спорожнюємо для $target"
 ],
 "Close": [
  null,
  "Закрити"
 ],
 "Compatible with all systems and devices (MBR)": [
  null,
  "Сумісний із усіма системами та пристроями (MBR)"
 ],
 "Compatible with modern system and hard disks > 2TB (GPT)": [
  null,
  "Сумісний зі сучасними системами та жорсткими дисками > 2 ТБ (GPT)"
 ],
 "Compression": [
  null,
  "Стискання"
 ],
 "Confirm passphrase": [
  null,
  "Підтвердить пароль"
 ],
 "Content": [
  null,
  "Вміст"
 ],
 "Create": [
  null,
  "Створити"
 ],
 "Create Logical Volume": [
  null,
  "Створити логічний том"
 ],
 "Create Partition": [
  null,
  "Створити розділ"
 ],
 "Create RAID Device": [
  null,
  "Створити пристрій RAID"
 ],
 "Create Snapshot": [
  null,
  "Створення знімка"
 ],
 "Create Thin Volume": [
  null,
  "Створити тонкий том"
 ],
 "Create VDO Device": [
  null,
  "Створити пристрій VDO"
 ],
 "Create Volume Group": [
  null,
  "Створити групу томів"
 ],
 "Create new Logical Volume": [
  null,
  "Створити логічний том"
 ],
 "Create partition": [
  null,
  "Створити розділ"
 ],
 "Create partition on $0": [
  null,
  "Створити розділ на $0"
 ],
 "Create partition table": [
  null,
  "Створити таблицю розділів"
 ],
 "Creating RAID Device $target": [
  null,
  "Створюємо пристрій RAID $target"
 ],
 "Creating filesystem on $target": [
  null,
  "Створюємо файлову систему на $target"
 ],
 "Creating logical volume $target": [
  null,
  "Створюємо логічний том $target"
 ],
 "Creating partition $target": [
  null,
  "Створюємо розділ $target"
 ],
 "Creating snapshot of $target": [
  null,
  "Створюємо знімок $target"
 ],
 "Creating volume group $target": [
  null,
  "Створюємо групу томів $target"
 ],
 "Custom": [
  null,
  "Нетиповий"
 ],
 "Custom (Enter filesystem type)": [
  null,
  "Нетипова (Вкажіть тип файлової системи)"
 ],
 "Custom encryption options": [
  null,
  "Нетипові параметри шифрування"
 ],
 "Custom mount option": [
  null,
  "Нетиповий параметр монтування"
 ],
 "Custom mount options": [
  null,
  "Нетипові параметри монтування"
 ],
 "DISK IS FAILING": [
  null,
  "ДИСК НЕПРАЦЕЗДАТНИЙ"
 ],
 "Data Used": [
  null,
  "Використано даних"
 ],
 "Deactivate": [
  null,
  "Вимкнути"
 ],
 "Deactivating $target": [
  null,
  "Деактивуємо $target"
 ],
 "Deduplication": [
  null,
  "Скасування дублювання"
 ],
 "Default": [
  null,
  "Типовий"
 ],
 "Delete": [
  null,
  "Вилучити"
 ],
 "Deleting $target": [
  null,
  "Вилучаємо $target"
 ],
 "Deleting a RAID device will erase all data on it.": [
  null,
  "Вилучення пристрою RAID призведе до витирання з нього усіх даних."
 ],
 "Deleting a VDO device will erase all data on it.": [
  null,
  "Вилучення пристрою VDO призведе до витирання усіх даних на ньому."
 ],
 "Deleting a logical volume will delete all data in it.": [
  null,
  "Вилучення логічного тому призведе до витирання усіх даних, що на ньому зберігаються."
 ],
 "Deleting a partition will delete all data in it.": [
  null,
  "Вилучення розділу призведе до вилучення усіх даних, що на ньому зберігаються."
 ],
 "Deleting a volume group will erase all data on it.": [
  null,
  "Вилучення групи томів призведе до витирання усіх даних, що у ній зберігаються."
 ],
 "Deleting volume group $target": [
  null,
  "Вилучаємо групу томів $target"
 ],
 "Device File": [
  null,
  "Файл пристрою"
 ],
 "Device is read-only": [
  null,
  "Пристрій придатний лише для читання"
 ],
 "Disk": [
  null,
  "Диск"
 ],
 "Disk is OK": [
  null,
  "З диском усе гаразд"
 ],
 "Disks": [
  null,
  "Диски"
 ],
 "Don't overwrite existing data": [
  null,
  "Не перезаписувати наявні дані"
 ],
 "Drive": [
  null,
  "Диск"
 ],
 "Drives": [
  null,
  "Диски"
 ],
 "Edit": [
  null,
  "Змінити"
 ],
 "Ejecting $target": [
  null,
  "Видобуваємо $target"
 ],
 "Emptying $target": [
  null,
  "Спорожняємо $target"
 ],
 "Encrypted $0": [
  null,
  "Зашифрований $0"
 ],
 "Encrypted EXT4 (LUKS)": [
  null,
  "Шифрована EXT4 (LUKS)"
 ],
 "Encrypted Logical Volume of $0": [
  null,
  "Зашифрований логічний том $0"
 ],
 "Encrypted Partition of $0": [
  null,
  "Шифрований розділ $0"
 ],
 "Encrypted XFS (LUKS)": [
  null,
  "Шифрована XFS (LUKS)"
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
  "Шифрування"
 ],
 "Encryption Options": [
  null,
  "Параметри шифрування"
 ],
 "Erase": [
  null,
  "Витерти"
 ],
 "Erasing $target": [
  null,
  "Витираємо $target"
 ],
 "Error": [
  null,
  "Помилка"
 ],
 "Extended Partition": [
  null,
  "Розширений розділ"
 ],
 "FAILED": [
  null,
  "ПОМИЛКА"
 ],
 "Filesystem": [
  null,
  "Файлова система"
 ],
 "Filesystem Mounting": [
  null,
  "Монтування файлової системи"
 ],
 "Filesystem Name": [
  null,
  "Назва файлової системи"
 ],
 "Filesystem type": [
  null,
  "Тип файлової системи"
 ],
 "Filesystems": [
  null,
  "Файлові системи"
 ],
 "Format": [
  null,
  "Формат"
 ],
 "Format $0": [
  null,
  "Форматувати $0"
 ],
 "Format Disk $0": [
  null,
  "Форматувати диск $0"
 ],
 "Formatting a disk will erase all data on it.": [
  null,
  "Форматування диска призведе до знищення даних, які на ньому зберігаються."
 ],
 "Formatting a storage device will erase all data on it.": [
  null,
  "Форматування пристрою для зберігання даних призведе до знищення даних, які на ньому зберігаються."
 ],
 "Free": [
  null,
  "Вільно"
 ],
 "Free Space": [
  null,
  "Вільне місце"
 ],
 "Go to now": [
  null,
  "Перейти зараз"
 ],
 "Grow": [
  null,
  "Збільшити"
 ],
 "Grow Logical Volume": [
  null,
  ""
 ],
 "Grow logical size of $0": [
  null,
  "Збільшити логічний розмір $0"
 ],
 "Grow to take all space": [
  null,
  "Збільшити так, щоб використати усе місце"
 ],
 "In Sync": [
  null,
  "Синхронізовано"
 ],
 "Inactive volume": [
  null,
  "Неактивний том"
 ],
 "Index Memory": [
  null,
  "Пам'ять покажчика"
 ],
 "Invalid username or password": [
  null,
  "Некоректне ім’я користувача чи пароль"
 ],
 "Jobs": [
  null,
  "Завдання"
 ],
 "Local Mount Point": [
  null,
  "Локальна точка монтування"
 ],
 "Lock": [
  null,
  "Заблокувати"
 ],
 "Locking $target": [
  null,
  "Блокуємо $target"
 ],
 "Logical": [
  null,
  "Логічний"
 ],
 "Logical Size": [
  null,
  "Логічний розмір"
 ],
 "Logical Volume": [
  null,
  "Логічний том"
 ],
 "Logical Volume (Snapshot)": [
  null,
  "Логічний том (знімок)"
 ],
 "Logical Volume of $0": [
  null,
  "Логічний том $0"
 ],
 "Marking $target as faulty": [
  null,
  "Позначаємо $target як помилковий"
 ],
 "Member of RAID Device": [
  null,
  "Елемент пристрою RAID"
 ],
 "Member of RAID Device $0": [
  null,
  "Елемент пристрою RAID $0"
 ],
 "Metadata Used": [
  null,
  "Використано метаданих"
 ],
 "Modifying $target": [
  null,
  "Змінюємо $target"
 ],
 "Mount": [
  null,
  "Змонтувати"
 ],
 "Mount Options": [
  null,
  "Параметри монтування"
 ],
 "Mount Point": [
  null,
  "Точка монтування"
 ],
 "Mount at boot": [
  null,
  "Змонтувати при завантаженні"
 ],
 "Mount options": [
  null,
  "Параметри монтування"
 ],
 "Mount point can not be empty": [
  null,
  "Точка монтування не може бути порожньою"
 ],
 "Mount point cannot be empty.": [
  null,
  "Точка монтування не може бути порожньою."
 ],
 "Mount point must start with \"/\".": [
  null,
  "Запис точки монтування має починатися з «/»."
 ],
 "Mount read only": [
  null,
  "Змонтувати лише для читання"
 ],
 "Mounted At": [
  null,
  "Змонтовано"
 ],
 "Mounting": [
  null,
  "Монтування"
 ],
 "Mounting $target": [
  null,
  "Монтуємо $target"
 ],
 "NFS Mount": [
  null,
  "Змонтована NFS"
 ],
 "NFS Mounts": [
  null,
  "Монтування NFS"
 ],
 "NTFS - Compatible with most systems": [
  null,
  "NTFS - Сумісна з більшістю систем"
 ],
 "Name": [
  null,
  "Назва"
 ],
 "Name can not be empty.": [
  null,
  "Назва не повинна бути порожньою."
 ],
 "Name cannot be empty.": [
  null,
  "Назва не може бути порожньою."
 ],
 "Name cannot be longer than 127 characters.": [
  null,
  "Назва не повинна бути довшою за 127 символів."
 ],
 "Name cannot contain the character '$0'.": [
  null,
  "Назва не повинна містити символу «$0»."
 ],
 "Name cannot contain whitespace.": [
  null,
  "У назві не повинно бути пробілів"
 ],
 "New NFS Mount": [
  null,
  "Нове монтування NFS"
 ],
 "Next": [
  null,
  "Далі"
 ],
 "No Filesystem": [
  null,
  "Немає файлової системи"
 ],
 "No Logical Volumes": [
  null,
  "Немає логічних томів"
 ],
 "No NFS mounts set up": [
  null,
  "Монтувань NFS не налаштовано"
 ],
 "No disks are available.": [
  null,
  "Немає доступних дисків."
 ],
 "No drives attached": [
  null,
  "Не долучено жодного диска"
 ],
 "No free space": [
  null,
  "Недостатньо вільного простору"
 ],
 "No iSCSI targets set up": [
  null,
  "Призначень iSCSI не налаштовано"
 ],
 "No media inserted": [
  null,
  "Не виявлено носія даних"
 ],
 "No partitioning": [
  null,
  "Немає розподілу на розділи"
 ],
 "No storage set up as RAID": [
  null,
  "Жодне зі сховищ даних не налаштовано як RAID"
 ],
 "No storage set up as VDO": [
  null,
  "Немає сховища даних налаштованого як VDO"
 ],
 "No volume groups created": [
  null,
  "Груп томів не створено"
 ],
 "Not found": [
  null,
  "Не знайдено"
 ],
 "Not mounted": [
  null,
  "Не змонтовано"
 ],
 "Not running": [
  null,
  "Зупинено"
 ],
 "Off": [
  null,
  "Вимкнено"
 ],
 "On": [
  null,
  "Увімкнено"
 ],
 "Only $0 of $1 are used.": [
  null,
  "Використано лише $0 з $1."
 ],
 "Operation '$operation' on $target": [
  null,
  "Дія «$operation» над $target"
 ],
 "Options": [
  null,
  "Параметри"
 ],
 "Other Devices": [
  null,
  "Інші пристрої"
 ],
 "Overwrite existing data with zeros": [
  null,
  "Перезаписати наявні дані нулями"
 ],
 "Partition": [
  null,
  "Розділ"
 ],
 "Partition of $0": [
  null,
  "Розділ $0"
 ],
 "Partitioning": [
  null,
  "Розподіл"
 ],
 "Passphrase": [
  null,
  "Пароль"
 ],
 "Passphrase cannot be empty": [
  null,
  "Пароль не може бути порожнім"
 ],
 "Passphrases do not match": [
  null,
  "Паролі не збігаються"
 ],
 "Password": [
  null,
  "Пароль"
 ],
 "Path on Server": [
  null,
  "Шлях на сервері"
 ],
 "Path on server cannot be empty.": [
  null,
  "Шлях на сервері не може бути порожнім."
 ],
 "Path on server must start with \"/\".": [
  null,
  "Шлях на сервері має починатися з «/»."
 ],
 "Physical": [
  null,
  "Фізичний"
 ],
 "Physical Volume": [
  null,
  "Фізичний том"
 ],
 "Physical Volumes": [
  null,
  "Фізичні томи"
 ],
 "Physical volume of $0": [
  null,
  "Фізичний том $0"
 ],
 "Physical volumes can not be resized here.": [
  null,
  ""
 ],
 "Please confirm deletion of $0": [
  null,
  "Будь ласка, підтвердьте вилучення $0"
 ],
 "Please confirm stopping of $0": [
  null,
  "Будь ласка, підтвердьте зупинку $0"
 ],
 "Pool": [
  null,
  "Буфер"
 ],
 "Pool for Thin Logical Volumes": [
  null,
  "Буфер для тонких логічних томів"
 ],
 "Pool for Thin Volumes": [
  null,
  "Буфер для тонких томів"
 ],
 "Pool for thinly provisioned volumes": [
  null,
  "Буфер для тонких резервованих томів"
 ],
 "Port": [
  null,
  "Порт"
 ],
 "Purpose": [
  null,
  "Призначення"
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
  "RAID 0 (Стрічка)"
 ],
 "RAID 1": [
  null,
  "RAID 1"
 ],
 "RAID 1 (Mirror)": [
  null,
  "RAID 1 (Дзеркало)"
 ],
 "RAID 10": [
  null,
  "RAID 10"
 ],
 "RAID 10 (Stripe of Mirrors)": [
  null,
  "RAID 10 (Стрічка дзеркал)"
 ],
 "RAID 4": [
  null,
  "RAID 4"
 ],
 "RAID 4 (Dedicated Parity)": [
  null,
  "RAID 4 (Пов’язана парність)"
 ],
 "RAID 5": [
  null,
  "RAID 5"
 ],
 "RAID 5 (Distributed Parity)": [
  null,
  "RAID 5 (Розподілена парність)"
 ],
 "RAID 6": [
  null,
  "RAID 6"
 ],
 "RAID 6 (Double Distributed Parity)": [
  null,
  "RAID 6 (Подвійна розподілена парність)"
 ],
 "RAID Device": [
  null,
  "пристрій RAID"
 ],
 "RAID Device $0": [
  null,
  "Пристій RAID $0"
 ],
 "RAID Devices": [
  null,
  "Пристрої RAID"
 ],
 "RAID Level": [
  null,
  "Рівень RAID"
 ],
 "RAID Member": [
  null,
  "Елемент RAID"
 ],
 "Reading": [
  null,
  "Читання"
 ],
 "Reboot": [
  null,
  "Перезавантажити"
 ],
 "Recovering": [
  null,
  "Відновлюємо"
 ],
 "Recovering RAID Device $target": [
  null,
  "Відновлюємо пристрій RAID $target"
 ],
 "Remove device": [
  null,
  "Вилучити пристрій"
 ],
 "Removing $target from RAID Device": [
  null,
  "Вилучаємо $target з пристрою RAID"
 ],
 "Removing physical volume from $target": [
  null,
  "Вилучаємо фізичний том з $target"
 ],
 "Rename": [
  null,
  "Перейменувати"
 ],
 "Rename Logical Volume": [
  null,
  "Перейменувати логічний том"
 ],
 "Rename Volume Group": [
  null,
  "Перейменувати групу томів"
 ],
 "Renaming $target": [
  null,
  "Перейменовуємо $target"
 ],
 "Repairing $target": [
  null,
  ""
 ],
 "Resizing $target": [
  null,
  "Зміна розміру $target"
 ],
 "Running": [
  null,
  "Працює"
 ],
 "SMART self-test of $target": [
  null,
  "Самоперевірка SMART $target"
 ],
 "Securely erasing $target": [
  null,
  "Безпечно витираємо $target"
 ],
 "Server": [
  null,
  "Сервер"
 ],
 "Server Address": [
  null,
  "Адреса сервера"
 ],
 "Server address cannot be empty.": [
  null,
  "Адреса сервера не може бути порожньою."
 ],
 "Server cannot be empty.": [
  null,
  "Запис сервера не може бути порожнім."
 ],
 "Setting up loop device $target": [
  null,
  "Налаштовуємо петльовий пристрій $target"
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
  "Розмір"
 ],
 "Size cannot be negative": [
  null,
  "Розмір не може бути від’ємним"
 ],
 "Size cannot be zero": [
  null,
  "Розмір не може бути нульовим"
 ],
 "Size is too large": [
  null,
  "Розмір є надто великим"
 ],
 "Size must be a number": [
  null,
  "Розмір має бути числом"
 ],
 "Size must be at least $0": [
  null,
  "Розмір має бути не меншим за $0"
 ],
 "Spare": [
  null,
  "Запас"
 ],
 "Start": [
  null,
  "Почати"
 ],
 "Start Multipath": [
  null,
  "Запустити Multipath"
 ],
 "Start Scrubbing": [
  null,
  "Почати витирання"
 ],
 "Starting RAID Device $target": [
  null,
  "Зупиняємо пристрій RAID $target"
 ],
 "Starting swapspace $target": [
  null,
  "Запускаємо резервну область пам’яті $target"
 ],
 "Stop": [
  null,
  "Зупинити"
 ],
 "Stop Device": [
  null,
  ""
 ],
 "Stop Scrubbing": [
  null,
  "Зупинити витирання"
 ],
 "Stop and remove": [
  null,
  "Зупинити і вилучити"
 ],
 "Stop and Unmount": [
  null,
  "Зупинити і демонтувати"
 ],
 "Stopping RAID Device $target": [
  null,
  "Зупиняємо пристрій RAID $target"
 ],
 "Stopping swapspace $target": [
  null,
  "Зупиняємо резервну область пам’яті $target"
 ],
 "Storage": [
  null,
  "Сховище даних"
 ],
 "Storage Logs": [
  null,
  "Журнали зберігання"
 ],
 "Store passphrase": [
  null,
  "Зберігати пароль"
 ],
 "Stored Passphrase": [
  null,
  "Збережений пароль"
 ],
 "Stored passphrase": [
  null,
  "Збережений пароль"
 ],
 "Swap": [
  null,
  "Свопінґ"
 ],
 "Synchronizing RAID Device $target": [
  null,
  "Синхронізуємо пристрій RAID $target"
 ],
 "Targets": [
  null,
  "Призначення"
 ],
 "The \"storaged\" API is not available on this system.": [
  null,
  "У цій системі програмний інтерфейс «storaged» є недоступним."
 ],
 "The RAID Array is in a degraded state": [
  null,
  "Масив RAID перебуває у стані із погіршеними властивостями"
 ],
 "The RAID device must be running in order to add spare disks.": [
  null,
  "Для додавання резервних дисків має працювати пристрій RAID."
 ],
 "The RAID device must be running in order to remove disks.": [
  null,
  "Для вилучення дисків має працювати пристрій RAID."
 ],
 "The creation of this VDO device did not finish and the device can't be used.": [
  null,
  "Створення цього пристрою VDO не завершено, ним не можна користуватися."
 ],
 "The filesystem is in use by system services or login sessions.                Proceeding will stop these services and sessions.": [
  null,
  "Файлова система використовується службами системи або сеансами користувачів. Виконання цієї дії призведе до припинення роботи цих служб та сеансів."
 ],
 "The last disk of a RAID device cannot be removed.": [
  null,
  "Останній диск пристрою RAID вилучати не можна."
 ],
 "The last physical volume of a volume group cannot be removed.": [
  null,
  "Не можна вилучати останній фізичний том із групи томів."
 ],
 "The user <b>$0</b> is not permitted to manage storage": [
  null,
  "Користувачу <b>$0</b> не дозволено керувати сховищем даних"
 ],
 "There are devices with multiple paths on the system, but the multipath service is not running.": [
  null,
  "У системі є пристрої із декількома шляхами доступу, але службу multipath не запущено."
 ],
 "There is not enough free space elsewhere to remove this physical volume. At least $0 more free space is needed.": [
  null,
  "Для вилучення цього фізичного тому недостатньо вільного місця. Потрібно принаймні $0 вільного місця."
 ],
 "Thin Logical Volume": [
  null,
  "Тонкий логічний том"
 ],
 "This NFS mount is in use and only its options can be changed.": [
  null,
  "Це монтування NFS використовується; можна лише змінювати його параметри."
 ],
 "This VDO device does not use all of its backing device.": [
  null,
  "Цей пристрій VDO не використовує увесь об'єм резервного пристрою."
 ],
 "This device has filesystems that are currently in use.                Proceeding will unmount all filesystems on it.": [
  null,
  "На цьому пристрої міститься файлова система, яка зараз використовується. Виконання дії призведе до демонтування усіх файлових систем на пристрої."
 ],
 "This device is currently used for RAID devices.": [
  null,
  "Цей пристрій зараз використовується для пристроїв RAID."
 ],
 "This device is currently used for RAID devices.                Proceeding will remove it from its RAID devices.": [
  null,
  "Цей пристрій зараз використовується для формування пристроїв RAID. Якщо дію буде виконано, пристрій буде вилучено із його пристроїв RAID."
 ],
 "This device is currently used for VDO devices.": [
  null,
  "Цей пристрій зараз використовується для зберігання даних пристроїв VDO."
 ],
 "This device is currently used for volume groups.": [
  null,
  "Цей пристрій зараза використовується для груп томів."
 ],
 "This device is currently used for volume groups.                Proceeding will remove it from its volume groups.": [
  null,
  "Цей пристрій зараз використовується для груп томів. Якщо дію буде виконано, пристрій буде вилучено із його груп томів."
 ],
 "This disk cannot be removed while the device is recovering.": [
  null,
  "Цей диск не можна вилучати, доки пристрій перебуває у стані відновлення."
 ],
 "This volume needs to be activated before it can be resized.": [
  null,
  ""
 ],
 "Transfer data asynchronously": [
  null,
  "Передавати дані асинхронно"
 ],
 "Type": [
  null,
  "Тип"
 ],
 "UUID": [
  null,
  "UUID"
 ],
 "Unable to reach server": [
  null,
  "Не вдалося досягти сервера"
 ],
 "Unable to remove mount": [
  null,
  "Не вдалося вилучити монтування"
 ],
 "Unable to unmount filesystem": [
  null,
  "Не вдалося демонтувати файлову систему"
 ],
 "Unknown": [
  null,
  "Невідомий"
 ],
 "Unknown ($0)": [
  null,
  "Невідомий ($0)"
 ],
 "Unknown host name": [
  null,
  "Невідома назва вузла"
 ],
 "Unlock": [
  null,
  "Розблокувати"
 ],
 "Unlock at boot": [
  null,
  "Розблокувати при завантаженні"
 ],
 "Unlock read only": [
  null,
  "Розблокувати лише для читання"
 ],
 "Unlocking $target": [
  null,
  "Розблокуємо $target"
 ],
 "Unmount": [
  null,
  "Демонтувати"
 ],
 "Unmounting $target": [
  null,
  "Демонтуємо $target"
 ],
 "Unrecognized Data": [
  null,
  "Нерозпізнані дані"
 ],
 "Unrecognized data can not be made smaller here.": [
  null,
  ""
 ],
 "Unsupported volume": [
  null,
  "Непідтримуваний том"
 ],
 "Usage": [
  null,
  "Використання"
 ],
 "Use 512 Byte emulation": [
  null,
  "Емуляція 512 байтів"
 ],
 "Used": [
  null,
  "Використано"
 ],
 "Username": [
  null,
  "Користувач"
 ],
 "VDO Backing": [
  null,
  "Резерв VDO"
 ],
 "VDO Device": [
  null,
  "Пристрій VDO"
 ],
 "VDO Device $0": [
  null,
  "Пристрій VDO $0"
 ],
 "VDO Devices": [
  null,
  "Пристрої VDO"
 ],
 "VDO backing devices can not be made smaller": [
  null,
  ""
 ],
 "VFAT - Compatible with all systems and devices": [
  null,
  "VFAT - Сумісна із усіма системами та пристроями"
 ],
 "Very securely erasing $target": [
  null,
  "Дуже безпечно витираємо $target"
 ],
 "Volume": [
  null,
  "Том"
 ],
 "Volume Group": [
  null,
  "Група томів"
 ],
 "Volume Group $0": [
  null,
  "Група томів $0"
 ],
 "Volume Groups": [
  null,
  "Групи томів"
 ],
 "Write-mostly": [
  null,
  "Здебільшого запис"
 ],
 "Writing": [
  null,
  "Запис"
 ],
 "XFS - Red Hat Enterprise Linux 7 default": [
  null,
  "XFS - Типова для Red Hat Enterprise Linux 7"
 ],
 "[$0 bytes of binary data]": [
  null,
  "[$0 байтів двійкових даних]"
 ],
 "[binary data]": [
  null,
  "[двійкові дані]"
 ],
 "[no data]": [
  null,
  "[немає даних]"
 ],
 "ext4 - Red Hat Enterprise Linux 6 default": [
  null,
  "ext4 - Типова для Red Hat Enterprise Linux 6"
 ],
 "iSCSI Targets": [
  null,
  "Призначення iSCSI"
 ],
 "unknown target": [
  null,
  "невідоме призначення"
 ],
 "unpartitioned space on $0": [
  null,
  "нерозподілене місце на $0"
 ],
 "storage-id-desc\u0004$0 File System": [
  null,
  "Файлова система $0"
 ],
 "storage-id-desc\u0004Encrypted data": [
  null,
  "Зашифровані дані"
 ],
 "storage-id-desc\u0004Other Data": [
  null,
  "Інші дані"
 ],
 "storage-id-desc\u0004Swap Space": [
  null,
  "Резервна пам’ять"
 ],
 "storage-id-desc\u0004Unrecognized Data": [
  null,
  "Нерозпізнані дані"
 ],
 "storage-id-desc\u0004VDO Backing": [
  null,
  "Резерв VDO"
 ],
 "storage\u0004Drive": [
  null,
  "Диск"
 ],
 "storage\u0004Hard Disk": [
  null,
  "Жорсткий диск"
 ],
 "storage\u0004Optical Drive": [
  null,
  "Пристрій читання оптичних дисків"
 ],
 "storage\u0004Removable Drive": [
  null,
  "Портативний диск"
 ],
 "storage\u0004Solid-State Disk": [
  null,
  "Твердотільний диск"
 ],
 "format-bytes\u0004bytes": [
  null,
  "байтів"
 ]
}));
