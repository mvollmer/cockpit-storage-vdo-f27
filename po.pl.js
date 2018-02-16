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
nplurals=3; plural=n==1 ? 0 : n%10>=2 && n%10<=4 && (n%100<10 || n%100>=20) ? 1 : 2;
return plural;
},
  "language": "pl",
  "x-generator": "Zanata 3.9.6"
 },
 "$0 Block Device": [
  null,
  "Urządzenie blokowe $0"
 ],
 "$0 Chunk Size": [
  null,
  "Rozmiar bloku: $0"
 ],
 "$0 Disks": [
  null,
  "Dyski: $0"
 ],
 "$0 data + $1 overhead used of $2 ($3)": [
  null,
  "$0 danych + $1 nadwyżki użyto z $2 ($3)"
 ],
 "$0 day": [
  "$0 days",
  "$0 dzień",
  "$0 dni",
  "$0 dni"
 ],
 "$0 disk is missing": [
  "$0 disks are missing",
  "Brak $0 dysku",
  "Brak $0 dysków",
  "Brak $0 dysków"
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
  "$0 godzina",
  "$0 godziny",
  "$0 godzin"
 ],
 "$0 is in active use": [
  null,
  "$0 jest obecnie używane"
 ],
 "$0 minute": [
  "$0 minutes",
  "$0 minuta",
  "$0 minuty",
  "$0 minut"
 ],
 "$0 month": [
  "$0 months",
  "$0 miesiąc",
  "$0 miesiące",
  "$0 miesięcy"
 ],
 "$0 of $1": [
  null,
  "$0 z $1"
 ],
 "$0 used of $1 ($2 saved)": [
  null,
  "$0 używanych z $1 ($2 zapisano)"
 ],
 "$0 week": [
  "$0 weeks",
  "$0 tydzień",
  "$0 tygodnie",
  "$0 tygodni"
 ],
 "$0 year": [
  "$0 years",
  "$0 rok",
  "$0 lata",
  "$0 lat"
 ],
 "$0, $1 free": [
  null,
  "$0, wolne: $1"
 ],
 "$name (from $host)": [
  null,
  "$name (z $host)"
 ],
 "${size} ${desc}": [
  null,
  "${size} ${desc}"
 ],
 "(default)": [
  null,
  "(domyślnie)"
 ],
 "(none)": [
  null,
  "(brak)"
 ],
 "1 MiB": [
  null,
  "1 MiB"
 ],
 "1 day": [
  null,
  "1 dzień"
 ],
 "1 hour": [
  null,
  "1 godzina"
 ],
 "1 week": [
  null,
  "1 tydzień"
 ],
 "128 KiB": [
  null,
  "128 KiB"
 ],
 "16 KiB": [
  null,
  "16 KiB"
 ],
 "2 MiB": [
  null,
  "2 MiB"
 ],
 "32 KiB": [
  null,
  "32 KiB"
 ],
 "4 KiB": [
  null,
  "4 KiB"
 ],
 "5 minutes": [
  null,
  "5 minut"
 ],
 "512 KiB": [
  null,
  "512 KiB"
 ],
 "6 hours": [
  null,
  "6 godzin"
 ],
 "64 KiB": [
  null,
  "64 KiB"
 ],
 "8 KiB": [
  null,
  "8 KiB"
 ],
 "A disk is needed.": [
  null,
  "Wymagany jest dysk."
 ],
 "A spare disk needs to be added first before this disk can be removed.": [
  null,
  "Przed usunięciem tego dysku należy najpierw dodać dysk zapasowy."
 ],
 "Activate": [
  null,
  "Aktywuj"
 ],
 "Activating $target": [
  null,
  "Aktywowanie $target"
 ],
 "Add": [
  null,
  "Dodaj"
 ],
 "Add Disks": [
  null,
  "Dodaj dyski"
 ],
 "Add iSCSI Portal": [
  null,
  "Dodaj portal iSCSI"
 ],
 "Adding physical volume to $target": [
  null,
  "Dodawanie woluminu fizycznego do $target"
 ],
 "Address": [
  null,
  "Adres"
 ],
 "Apply": [
  null,
  "Zastosuj"
 ],
 "At least $0 disks are needed.": [
  null,
  "Wymagane są co najmniej $0 dyski."
 ],
 "At least one disk is needed.": [
  null,
  "Wymagany jest co najmniej jeden dysk."
 ],
 "Authentication required": [
  null,
  "Wymagane jest uwierzytelnienie"
 ],
 "Available targets on $0": [
  null,
  "Dostępne cele w $0"
 ],
 "Backing Device": [
  null,
  "Urządzenie podstawowe"
 ],
 "Block": [
  null,
  "Zablokuj"
 ],
 "Block device for filesystems": [
  null,
  "Urządzenie blokowe dla systemów plików"
 ],
 "Blocked": [
  null,
  "Zablokowane"
 ],
 "Can't delete while unlocked": [
  null,
  "Nie można usunąć, kiedy jest odblokowane"
 ],
 "Cancel": [
  null,
  "Anuluj"
 ],
 "Change": [
  null,
  "Zmień"
 ],
 "Change iSCSI Initiator Name": [
  null,
  "Zmień nazwę inicjatora iSCSI"
 ],
 "Checking $target": [
  null,
  ""
 ],
 "Checking RAID Device $target": [
  null,
  "Sprawdzanie urządzenia RAID $target"
 ],
 "Checking and Repairing RAID Device $target": [
  null,
  "Sprawdzanie i naprawianie urządzenia RAID $target"
 ],
 "Chunk Size": [
  null,
  "Rozmiar bloku"
 ],
 "Cleaning up for $target": [
  null,
  "Czyszczenie dla $target"
 ],
 "Close": [
  null,
  "Zamknij"
 ],
 "Compatible with all systems and devices (MBR)": [
  null,
  "Zgodne ze wszystkimi systemami i urządzeniami (MBR)"
 ],
 "Compatible with modern system and hard disks > 2TB (GPT)": [
  null,
  "Zgodne z nowoczesnymi systemami i dyskami twardymi > 2 TB (GPT)"
 ],
 "Compression": [
  null,
  "Kompresja"
 ],
 "Confirm passphrase": [
  null,
  "Potwierdź hasło"
 ],
 "Content": [
  null,
  "Zawartość"
 ],
 "Create": [
  null,
  "Utwórz"
 ],
 "Create Logical Volume": [
  null,
  "Utwórz wolumin logiczny"
 ],
 "Create Partition": [
  null,
  "Utwórz partycję"
 ],
 "Create RAID Device": [
  null,
  "Utwórz urządzenie RAID"
 ],
 "Create Snapshot": [
  null,
  "Utwórz migawkę"
 ],
 "Create Thin Volume": [
  null,
  "Utwórz cienki wolumin"
 ],
 "Create VDO Device": [
  null,
  "Utwórz urządzenie VDO"
 ],
 "Create Volume Group": [
  null,
  "Utwórz grupę woluminów"
 ],
 "Create new Logical Volume": [
  null,
  "Utworzono:"
 ],
 "Create partition": [
  null,
  "Utwórz partycję"
 ],
 "Create partition on $0": [
  null,
  "Utwórz partycję w $0"
 ],
 "Create partition table": [
  null,
  "Utwórz tablicę partycji"
 ],
 "Creating RAID Device $target": [
  null,
  "Tworzenie urządzenia RAID $target"
 ],
 "Creating filesystem on $target": [
  null,
  "Tworzenie systemu plików w $target"
 ],
 "Creating logical volume $target": [
  null,
  "Tworzenie woluminu logicznego $target"
 ],
 "Creating partition $target": [
  null,
  "Tworzenie partycji $target"
 ],
 "Creating snapshot of $target": [
  null,
  "Tworzenie migawki $target"
 ],
 "Creating volume group $target": [
  null,
  "Tworzenie grupy woluminów $target"
 ],
 "Custom": [
  null,
  "Niestandardowe"
 ],
 "Custom (Enter filesystem type)": [
  null,
  "Niestandardowe (podanie typu systemu plików)"
 ],
 "Custom encryption options": [
  null,
  "Niestandardowe opcje szyfrowania"
 ],
 "Custom mount option": [
  null,
  "Niestandardowa opcja montowania"
 ],
 "Custom mount options": [
  null,
  "Niestandardowe opcje montowania"
 ],
 "DISK IS FAILING": [
  null,
  "NA DYSKU WYSTĘPUJĄ BŁĘDY"
 ],
 "Data Used": [
  null,
  "Użyte dane"
 ],
 "Deactivate": [
  null,
  "Dezaktywuj"
 ],
 "Deactivating $target": [
  null,
  "Dezaktywowanie $target"
 ],
 "Deduplication": [
  null,
  "Deduplikacja"
 ],
 "Default": [
  null,
  "Domyślne"
 ],
 "Delete": [
  null,
  "Usuń"
 ],
 "Deleting $target": [
  null,
  "Usuwanie $target"
 ],
 "Deleting a RAID device will erase all data on it.": [
  null,
  "Usunięcie urządzenia RAID usunie wszystkie znajdujące się na nim dane."
 ],
 "Deleting a VDO device will erase all data on it.": [
  null,
  "Usunięcie urządzenia VDO usunie wszystkie znajdujące się na nim dane."
 ],
 "Deleting a logical volume will delete all data in it.": [
  null,
  "Usunięcie woluminu logicznego usunie wszystkie znajdujące się na nim dane."
 ],
 "Deleting a partition will delete all data in it.": [
  null,
  "Usunięcie partycji usunie wszystkie znajdujące się na niej dane."
 ],
 "Deleting a volume group will erase all data on it.": [
  null,
  "Usunięcie grupy woluminów usunie wszystkie znajdujące się w niej dane."
 ],
 "Deleting volume group $target": [
  null,
  "Usuwanie grupy woluminów $target"
 ],
 "Device File": [
  null,
  "Plik urządzenia"
 ],
 "Device is read-only": [
  null,
  "Urządzenie jest tylko do odczytu"
 ],
 "Disk": [
  null,
  "Dysk"
 ],
 "Disk is OK": [
  null,
  "Dysk jest OK"
 ],
 "Disks": [
  null,
  "Dyski"
 ],
 "Don't overwrite existing data": [
  null,
  "Nie zastępuj istniejących danych"
 ],
 "Drive": [
  null,
  "Napęd"
 ],
 "Drives": [
  null,
  "Napędy"
 ],
 "Edit": [
  null,
  "Modyfikuj"
 ],
 "Ejecting $target": [
  null,
  "Wysuwanie $target"
 ],
 "Emptying $target": [
  null,
  "Opróżnianie $target"
 ],
 "Encrypted $0": [
  null,
  "Zaszyfrowane $0"
 ],
 "Encrypted EXT4 (LUKS)": [
  null,
  "Szyfrowane EXT4 (LUKS)"
 ],
 "Encrypted Logical Volume of $0": [
  null,
  "Zaszyfrowany wolumin logiczny $0"
 ],
 "Encrypted Partition of $0": [
  null,
  "Zaszyfrowana partycja $0"
 ],
 "Encrypted XFS (LUKS)": [
  null,
  "Szyfrowane XFS (LUKS)"
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
  "Szyfrowanie"
 ],
 "Encryption Options": [
  null,
  "Opcje szyfrowania"
 ],
 "Erase": [
  null,
  "Wymaż"
 ],
 "Erasing $target": [
  null,
  "Czyszczenie $target"
 ],
 "Error": [
  null,
  "Błąd"
 ],
 "Extended Partition": [
  null,
  "Rozszerzona partycja"
 ],
 "FAILED": [
  null,
  "NIEPOWODZENIE"
 ],
 "Filesystem": [
  null,
  "System plików"
 ],
 "Filesystem Mounting": [
  null,
  "Montowanie systemu plików"
 ],
 "Filesystem Name": [
  null,
  "Nazwa systemu plików"
 ],
 "Filesystem type": [
  null,
  "Typ systemu plików"
 ],
 "Filesystems": [
  null,
  "Systemy plików"
 ],
 "Format": [
  null,
  "Sformatuj"
 ],
 "Format $0": [
  null,
  "Sformatuj $0"
 ],
 "Format Disk $0": [
  null,
  "Sformatuj dysk $0"
 ],
 "Formatting a disk will erase all data on it.": [
  null,
  "Sformatowanie dysku usunie wszystkie znajdujące się na nim dane."
 ],
 "Formatting a storage device will erase all data on it.": [
  null,
  "Sformatowanie urządzenia do przechowywania danych usunie wszystkie znajdujące się na nim dane."
 ],
 "Free": [
  null,
  "Wolne"
 ],
 "Free Space": [
  null,
  "Wolne miejsce"
 ],
 "Go to now": [
  null,
  "Przejdź teraz"
 ],
 "Grow": [
  null,
  "Powiększ"
 ],
 "Grow Logical Volume": [
  null,
  ""
 ],
 "Grow logical size of $0": [
  null,
  "Powiększ rozmiar logiczny $0"
 ],
 "Grow to take all space": [
  null,
  "Powiększ do użycia całego miejsca"
 ],
 "In Sync": [
  null,
  "Zsynchronizowane"
 ],
 "Inactive volume": [
  null,
  "Nieaktywny wolumin"
 ],
 "Index Memory": [
  null,
  "Pamięć indeksu"
 ],
 "Invalid username or password": [
  null,
  "Nieprawidłowa nazwa użytkownika lub hasło"
 ],
 "Jobs": [
  null,
  "Zadania"
 ],
 "Local Mount Point": [
  null,
  "Lokalny punkt montowania"
 ],
 "Lock": [
  null,
  "Zablokuj"
 ],
 "Locking $target": [
  null,
  "Blokowanie $target"
 ],
 "Logical": [
  null,
  "Logiczny"
 ],
 "Logical Size": [
  null,
  "Rozmiar logiczny"
 ],
 "Logical Volume": [
  null,
  "Wolumin logiczny"
 ],
 "Logical Volume (Snapshot)": [
  null,
  "Wolumin logiczny (migawka)"
 ],
 "Logical Volume of $0": [
  null,
  "Wolumin logiczny $0"
 ],
 "Marking $target as faulty": [
  null,
  "Oznaczanie $target jako wadliwe"
 ],
 "Member of RAID Device": [
  null,
  "Element urządzenia RAID"
 ],
 "Member of RAID Device $0": [
  null,
  "Element urządzenia RAID $0"
 ],
 "Metadata Used": [
  null,
  "Użyte metadane"
 ],
 "Modifying $target": [
  null,
  "Modyfikowanie $target"
 ],
 "Mount": [
  null,
  "Zamontuj"
 ],
 "Mount Options": [
  null,
  "Opcje montowania"
 ],
 "Mount Point": [
  null,
  "Punkt montowania"
 ],
 "Mount at boot": [
  null,
  "Montowanie podczas uruchamiania"
 ],
 "Mount options": [
  null,
  "Opcje montowania"
 ],
 "Mount point can not be empty": [
  null,
  "Punkt montowania nie może być pusty"
 ],
 "Mount point cannot be empty.": [
  null,
  "Punkt montowania nie może być pusty."
 ],
 "Mount point must start with \"/\".": [
  null,
  "Punkt montowania musi zaczynać się od „/”."
 ],
 "Mount read only": [
  null,
  "Montowanie tylko do odczytu"
 ],
 "Mounted At": [
  null,
  "Zamontowano w"
 ],
 "Mounting": [
  null,
  "Montowanie"
 ],
 "Mounting $target": [
  null,
  "Montowanie $target"
 ],
 "NFS Mount": [
  null,
  "Punkt montowania NFS"
 ],
 "NFS Mounts": [
  null,
  "Punkty montowania NFS"
 ],
 "NTFS - Compatible with most systems": [
  null,
  "NTFS — zgodne z większością systemów"
 ],
 "Name": [
  null,
  "Nazwa"
 ],
 "Name can not be empty.": [
  null,
  "Nazwa nie może być pusta."
 ],
 "Name cannot be empty.": [
  null,
  "Nazwa nie może być pusta."
 ],
 "Name cannot be longer than 127 characters.": [
  null,
  "Nazwa nie może być dłuższa niż 127 znaków."
 ],
 "Name cannot contain the character '$0'.": [
  null,
  "Nazwa nie może zawierać znaku „$0”."
 ],
 "Name cannot contain whitespace.": [
  null,
  "Nazwa nie może zawierać spacji."
 ],
 "New NFS Mount": [
  null,
  "Nowy punkt montowania NFS"
 ],
 "Next": [
  null,
  "Dalej"
 ],
 "No Filesystem": [
  null,
  "Brak systemu plików"
 ],
 "No Logical Volumes": [
  null,
  "Brak woluminów logicznych"
 ],
 "No NFS mounts set up": [
  null,
  "Nie ustawiono żadnych punktów montowania NFS"
 ],
 "No disks are available.": [
  null,
  "Brak dostępnych dysków."
 ],
 "No drives attached": [
  null,
  "Nie dołączono dysków"
 ],
 "No free space": [
  null,
  "Brak wolnego miejsca"
 ],
 "No iSCSI targets set up": [
  null,
  "Nie ustawiono żadnych celów iSCSI"
 ],
 "No media inserted": [
  null,
  "Nie włożono żadnego nośnika"
 ],
 "No partitioning": [
  null,
  "Brak partycjonowania"
 ],
 "No storage set up as RAID": [
  null,
  "Nie ustawiono żadnego urządzenia do przechowywania danych jako RAID"
 ],
 "No storage set up as VDO": [
  null,
  "Nie ustawiono żadnego urządzenia do przechowywania danych jako VDO"
 ],
 "No volume groups created": [
  null,
  "Nie utworzono grup woluminów"
 ],
 "Not found": [
  null,
  "Nie odnaleziono"
 ],
 "Not mounted": [
  null,
  "Niezamontowane"
 ],
 "Not running": [
  null,
  "Niedziałające"
 ],
 "Off": [
  null,
  "Wyłączone"
 ],
 "On": [
  null,
  "Włączone"
 ],
 "Only $0 of $1 are used.": [
  null,
  "Tylko $0 z $1 jest używane."
 ],
 "Operation '$operation' on $target": [
  null,
  "Działanie „$operation” na $target"
 ],
 "Options": [
  null,
  "Opcje"
 ],
 "Other Devices": [
  null,
  "Inne urządzenia"
 ],
 "Overwrite existing data with zeros": [
  null,
  "Zastąp istniejące dane zerami"
 ],
 "Partition": [
  null,
  "Partycja"
 ],
 "Partition of $0": [
  null,
  "Partycja $0"
 ],
 "Partitioning": [
  null,
  "Partycjonowanie"
 ],
 "Passphrase": [
  null,
  "Hasło"
 ],
 "Passphrase cannot be empty": [
  null,
  "Hasło nie może być puste"
 ],
 "Passphrases do not match": [
  null,
  "Hasła się nie zgadzają"
 ],
 "Password": [
  null,
  "Hasło"
 ],
 "Path on Server": [
  null,
  "Ścieżka na serwerze"
 ],
 "Path on server cannot be empty.": [
  null,
  "Ścieżka na serwerze nie może być pusta."
 ],
 "Path on server must start with \"/\".": [
  null,
  "Ścieżka na serwerze musi zaczynać się od „/”."
 ],
 "Physical": [
  null,
  "Fizyczny"
 ],
 "Physical Volume": [
  null,
  "Wolumin fizyczny"
 ],
 "Physical Volumes": [
  null,
  "Woluminy fizyczne"
 ],
 "Physical volume of $0": [
  null,
  "Wolumin fizyczny $0"
 ],
 "Physical volumes can not be resized here.": [
  null,
  ""
 ],
 "Please confirm deletion of $0": [
  null,
  "Proszę potwierdzić usunięcie $0"
 ],
 "Please confirm stopping of $0": [
  null,
  "Proszę potwierdzić zatrzymanie $0"
 ],
 "Pool": [
  null,
  "Pula"
 ],
 "Pool for Thin Logical Volumes": [
  null,
  "Pula dla cienkich woluminów logicznych"
 ],
 "Pool for Thin Volumes": [
  null,
  "Pula dla cienkich woluminów"
 ],
 "Pool for thinly provisioned volumes": [
  null,
  "Pula dla cienko nadzorowanych woluminów"
 ],
 "Port": [
  null,
  "Port"
 ],
 "Purpose": [
  null,
  "Zastosowanie"
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
  "RAID 0 (Striping)"
 ],
 "RAID 1": [
  null,
  "RAID 1"
 ],
 "RAID 1 (Mirror)": [
  null,
  "RAID 1 (Lustrzany)"
 ],
 "RAID 10": [
  null,
  "RAID 10"
 ],
 "RAID 10 (Stripe of Mirrors)": [
  null,
  "RID 10 (Striping lustrzany)"
 ],
 "RAID 4": [
  null,
  "RAID 4"
 ],
 "RAID 4 (Dedicated Parity)": [
  null,
  "RAID 4 (Dedykowana parzystość)"
 ],
 "RAID 5": [
  null,
  "RAID 5"
 ],
 "RAID 5 (Distributed Parity)": [
  null,
  "RAID 5 (Rozproszona parzystość)"
 ],
 "RAID 6": [
  null,
  "RAID 6"
 ],
 "RAID 6 (Double Distributed Parity)": [
  null,
  "RAID 6 (Podwójna rozproszona parzystość)"
 ],
 "RAID Device": [
  null,
  "Urządzenie RAID"
 ],
 "RAID Device $0": [
  null,
  "Urządzenie RAID $0"
 ],
 "RAID Devices": [
  null,
  "Urządzenia RAID"
 ],
 "RAID Level": [
  null,
  "Poziom macierzy RAID"
 ],
 "RAID Member": [
  null,
  "Element macierzy RAID"
 ],
 "Reading": [
  null,
  "Odczytywanie"
 ],
 "Reboot": [
  null,
  "Uruchom ponownie"
 ],
 "Recovering": [
  null,
  "Odzyskiwanie"
 ],
 "Recovering RAID Device $target": [
  null,
  "Przywracanie urządzenia RAID $target"
 ],
 "Remove device": [
  null,
  "Usuń urządzenie"
 ],
 "Removing $target from RAID Device": [
  null,
  "Usuwanie $target z urządzenia RAID"
 ],
 "Removing physical volume from $target": [
  null,
  "Usuwanie woluminu fizycznego z $target"
 ],
 "Rename": [
  null,
  "Zmień nazwę"
 ],
 "Rename Logical Volume": [
  null,
  "Zmiana nazwy woluminu logicznego"
 ],
 "Rename Volume Group": [
  null,
  "Zmień nazwę grupy woluminów"
 ],
 "Renaming $target": [
  null,
  "Zmienianie nazwy $target"
 ],
 "Repairing $target": [
  null,
  ""
 ],
 "Resizing $target": [
  null,
  "Zmienianie rozmiaru $target"
 ],
 "Running": [
  null,
  "Działające"
 ],
 "SMART self-test of $target": [
  null,
  "Test SMART $target"
 ],
 "Securely erasing $target": [
  null,
  "Bezpieczne usuwanie zawartości $target"
 ],
 "Server": [
  null,
  "Serwer"
 ],
 "Server Address": [
  null,
  "Adres serwera"
 ],
 "Server address cannot be empty.": [
  null,
  "Adres serwera nie może być pusty."
 ],
 "Server cannot be empty.": [
  null,
  "Serwer nie może być pusty."
 ],
 "Setting up loop device $target": [
  null,
  "Ustawianie urządzenia zwrotnego $target"
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
  "Rozmiar"
 ],
 "Size cannot be negative": [
  null,
  "Rozmiar nie może być ujemny"
 ],
 "Size cannot be zero": [
  null,
  "Rozmiar nie może wynosić zero"
 ],
 "Size is too large": [
  null,
  "Rozmiar jest za duży"
 ],
 "Size must be a number": [
  null,
  "Rozmiar musi być liczbą"
 ],
 "Size must be at least $0": [
  null,
  "Rozmiar musi wynosić co najmniej $0"
 ],
 "Spare": [
  null,
  "Zapasowe"
 ],
 "Start": [
  null,
  "Rozpocznij"
 ],
 "Start Multipath": [
  null,
  "Uruchom urządzenie wielościeżkowe"
 ],
 "Start Scrubbing": [
  null,
  "Rozpocznij kontrolę"
 ],
 "Starting RAID Device $target": [
  null,
  "Uruchamianie urządzenia RAID $target"
 ],
 "Starting swapspace $target": [
  null,
  "Uruchamianie przestrzeni wymiany $target"
 ],
 "Stop": [
  null,
  "Zatrzymaj"
 ],
 "Stop Device": [
  null,
  ""
 ],
 "Stop Scrubbing": [
  null,
  "Zatrzymaj kontrolę"
 ],
 "Stop and remove": [
  null,
  "Zatrzymaj i usuń"
 ],
 "Stop and Unmount": [
  null,
  "Zatrzymaj i odmontuj"
 ],
 "Stopping RAID Device $target": [
  null,
  "Zatrzymywanie urządzenia RAID $target"
 ],
 "Stopping swapspace $target": [
  null,
  "Zatrzymywanie przestrzeni wymiany $target"
 ],
 "Storage": [
  null,
  "Przechowywanie danych"
 ],
 "Storage Logs": [
  null,
  "Dzienniki urządzeń do przechowywania danych"
 ],
 "Store passphrase": [
  null,
  "Przechowaj hasło"
 ],
 "Stored Passphrase": [
  null,
  "Zachowane hasło"
 ],
 "Stored passphrase": [
  null,
  "Zachowane hasło"
 ],
 "Swap": [
  null,
  "Partycja wymiany"
 ],
 "Synchronizing RAID Device $target": [
  null,
  "Synchronizowanie urządzenia RAID $target"
 ],
 "Targets": [
  null,
  "Cele"
 ],
 "The \"storaged\" API is not available on this system.": [
  null,
  "API „storaged” nie jest dostępne w tym systemie."
 ],
 "The RAID Array is in a degraded state": [
  null,
  "Macierz RAID jest w stanie zdegradowanym"
 ],
 "The RAID device must be running in order to add spare disks.": [
  null,
  "Urządzenie RAID musi być uruchomione, aby dodać zapasowe dyski."
 ],
 "The RAID device must be running in order to remove disks.": [
  null,
  "Urządzenie RAID musi być uruchomione, aby usunąć dyski."
 ],
 "The creation of this VDO device did not finish and the device can't be used.": [
  null,
  "Utworzenie tego urządzenia VDO nie zostało ukończone, więc nie można go używać."
 ],
 "The filesystem is in use by system services or login sessions.                Proceeding will stop these services and sessions.": [
  null,
  "System plików jest używany przez usługi systemu lub sesje logowania.                Kontynuacja zatrzyma te usługi i sesje."
 ],
 "The last disk of a RAID device cannot be removed.": [
  null,
  "Nie można usuwać ostatniego dysku urządzenia RAID."
 ],
 "The last physical volume of a volume group cannot be removed.": [
  null,
  "Nie można usunąć ostatniego woluminu fizycznego grupy woluminów."
 ],
 "The user <b>$0</b> is not permitted to manage storage": [
  null,
  "Użytkownik <b>$0</b> nie ma zezwolenia na zarządzanie urządzeniami do przechowywania danych"
 ],
 "There are devices with multiple paths on the system, but the multipath service is not running.": [
  null,
  "W systemie obecne są urządzenia z wieloma ścieżkami, ale usługa urządzeń wielościeżkowych nie jest uruchomiona."
 ],
 "There is not enough free space elsewhere to remove this physical volume. At least $0 more free space is needed.": [
  null,
  "Za mało wolnego miejsca, aby usunąć ten wolumin fizyczny. Wymagane jest co najmniej $0 wolnego miejsca więcej."
 ],
 "Thin Logical Volume": [
  null,
  "Cienki wolumin logiczny"
 ],
 "This NFS mount is in use and only its options can be changed.": [
  null,
  "Ten punkt montowania NFS jest używany. Można zmieniać tylko jego opcje."
 ],
 "This VDO device does not use all of its backing device.": [
  null,
  "To urządzenie VDO nie używa całości swojego urządzenia podstawowego."
 ],
 "This device has filesystems that are currently in use.                Proceeding will unmount all filesystems on it.": [
  null,
  "To urządzenie ma obecnie używane systemy plików.                Kontynuacja odmontuje wszystkie jego systemy plików."
 ],
 "This device is currently used for RAID devices.": [
  null,
  "To urządzenie jest obecnie używane dla urządzeń RAID."
 ],
 "This device is currently used for RAID devices.                Proceeding will remove it from its RAID devices.": [
  null,
  "To urządzenie jest obecnie używane dla urządzeń RAID.                Kontynuacja usunie je z jego urządzeń RAID."
 ],
 "This device is currently used for VDO devices.": [
  null,
  "To urządzenie jest obecnie używane dla urządzeń VDO."
 ],
 "This device is currently used for volume groups.": [
  null,
  "To urządzenie jest obecnie używane dla grup woluminów."
 ],
 "This device is currently used for volume groups.                Proceeding will remove it from its volume groups.": [
  null,
  "To urządzenie jest obecnie używane dla grup woluminów.                Kontynuacja usunie je z jego grup woluminów."
 ],
 "This disk cannot be removed while the device is recovering.": [
  null,
  "Ten dysk nie może zostać usunięty podczas przywracania urządzenia."
 ],
 "This volume needs to be activated before it can be resized.": [
  null,
  ""
 ],
 "Transfer data asynchronously": [
  null,
  "Prześlij dane asynchronicznie"
 ],
 "Type": [
  null,
  "Typ"
 ],
 "UUID": [
  null,
  "UUID"
 ],
 "Unable to reach server": [
  null,
  "Nie można połączyć się z serwerem"
 ],
 "Unable to remove mount": [
  null,
  "Nie można usunąć punktu montowania"
 ],
 "Unable to unmount filesystem": [
  null,
  "Nie można odmontować systemu plików"
 ],
 "Unknown": [
  null,
  "Nieznane"
 ],
 "Unknown ($0)": [
  null,
  "Nieznane ($0)"
 ],
 "Unknown host name": [
  null,
  "Nieznana nazwa komputera"
 ],
 "Unlock": [
  null,
  "Odblokuj"
 ],
 "Unlock at boot": [
  null,
  "Odblokowywanie podczas uruchamiania"
 ],
 "Unlock read only": [
  null,
  "Odblokowywanie tylko do odczytu"
 ],
 "Unlocking $target": [
  null,
  "Odblokowywanie $target"
 ],
 "Unmount": [
  null,
  "Odmontuj"
 ],
 "Unmounting $target": [
  null,
  "Odmontowywanie $target"
 ],
 "Unrecognized Data": [
  null,
  "Nierozpoznane dane"
 ],
 "Unrecognized data can not be made smaller here.": [
  null,
  ""
 ],
 "Unsupported volume": [
  null,
  "Nieobsługiwany wolumin"
 ],
 "Usage": [
  null,
  "Użycie"
 ],
 "Use 512 Byte emulation": [
  null,
  "Użycie emulacji 512 bajtów"
 ],
 "Used": [
  null,
  "Używane"
 ],
 "Username": [
  null,
  "Nazwa użytkownika"
 ],
 "VDO Backing": [
  null,
  "Podstawa VDO"
 ],
 "VDO Device": [
  null,
  "Urządzenie VDO"
 ],
 "VDO Device $0": [
  null,
  "Urządzenie VDO $0"
 ],
 "VDO Devices": [
  null,
  "Urządzenia VDO"
 ],
 "VDO backing devices can not be made smaller": [
  null,
  ""
 ],
 "VFAT - Compatible with all systems and devices": [
  null,
  "VFAT — zgodne ze wszystkimi systemami i urządzeniami"
 ],
 "Very securely erasing $target": [
  null,
  "Bardzo bezpieczne usuwanie zawartości $target"
 ],
 "Volume": [
  null,
  "Wolumin"
 ],
 "Volume Group": [
  null,
  "Grupa woluminów"
 ],
 "Volume Group $0": [
  null,
  "Grupa woluminów $0"
 ],
 "Volume Groups": [
  null,
  "Grupy woluminów"
 ],
 "Write-mostly": [
  null,
  "Głównie zapisywane"
 ],
 "Writing": [
  null,
  "Zapisywanie"
 ],
 "XFS - Red Hat Enterprise Linux 7 default": [
  null,
  "XFS — domyślne w systemie Red Hat Enterprise Linux 7"
 ],
 "[$0 bytes of binary data]": [
  null,
  "[$0 B danych binarnych]"
 ],
 "[binary data]": [
  null,
  "[dane binarne]"
 ],
 "[no data]": [
  null,
  "[brak danych]"
 ],
 "ext4 - Red Hat Enterprise Linux 6 default": [
  null,
  "ext4 — domyślne w systemie Red Hat Enterprise Linux 6"
 ],
 "iSCSI Targets": [
  null,
  "Cele iSCSI"
 ],
 "unknown target": [
  null,
  "nieznany cel"
 ],
 "unpartitioned space on $0": [
  null,
  "nieprzydzielone miejsce na $0"
 ],
 "storage-id-desc\u0004$0 File System": [
  null,
  "System plików $0"
 ],
 "storage-id-desc\u0004Encrypted data": [
  null,
  "Zaszyfrowane dane"
 ],
 "storage-id-desc\u0004Other Data": [
  null,
  "Inne dane"
 ],
 "storage-id-desc\u0004Swap Space": [
  null,
  "Przestrzeń wymiany"
 ],
 "storage-id-desc\u0004Unrecognized Data": [
  null,
  "Nierozpoznane dane"
 ],
 "storage-id-desc\u0004VDO Backing": [
  null,
  "Podstawa VDO"
 ],
 "storage\u0004Drive": [
  null,
  "Napęd"
 ],
 "storage\u0004Hard Disk": [
  null,
  "Dysk twardy"
 ],
 "storage\u0004Optical Drive": [
  null,
  "Napęd optyczny"
 ],
 "storage\u0004Removable Drive": [
  null,
  "Dysk wymienny"
 ],
 "storage\u0004Solid-State Disk": [
  null,
  "Dysk SSD"
 ],
 "format-bytes\u0004bytes": [
  null,
  "B"
 ]
}));
