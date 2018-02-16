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
nplurals=2; plural=(n > 1);
return plural;
},
  "language": "fr",
  "x-generator": "Zanata 3.9.6"
 },
 "$0 Block Device": [
  null,
  "Périphérique de bloc de $0"
 ],
 "$0 Chunk Size": [
  null,
  "taille de bloc $0"
 ],
 "$0 Disks": [
  null,
  "$0 disques"
 ],
 "$0 data + $1 overhead used of $2 ($3)": [
  null,
  ""
 ],
 "$0 day": [
  "$0 days",
  "$0 jour",
  "$0 jours"
 ],
 "$0 disk is missing": [
  "$0 disks are missing",
  "$0 disque est manquant",
  "$0 disques sont manquants"
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
  "$0 heure",
  "$0 heures"
 ],
 "$0 is in active use": [
  null,
  "$0 est actuellement utilisé"
 ],
 "$0 minute": [
  "$0 minutes",
  "$0 minute",
  "$0 minutes"
 ],
 "$0 month": [
  "$0 months",
  "$0 mois",
  "$0 mois"
 ],
 "$0 of $1": [
  null,
  "$0 de $1"
 ],
 "$0 used of $1 ($2 saved)": [
  null,
  ""
 ],
 "$0 week": [
  "$0 weeks",
  "$0 semaine",
  "$0 semaines"
 ],
 "$0 year": [
  "$0 years",
  "$0 an",
  "$0 ans"
 ],
 "$0, $1 free": [
  null,
  ""
 ],
 "$name (from $host)": [
  null,
  "$name (de $host)"
 ],
 "${size} ${desc}": [
  null,
  ""
 ],
 "(default)": [
  null,
  "(défaut)"
 ],
 "(none)": [
  null,
  "(aucun)"
 ],
 "1 MiB": [
  null,
  "1 Mio"
 ],
 "1 day": [
  null,
  "1 jour"
 ],
 "1 hour": [
  null,
  "1 heure"
 ],
 "1 week": [
  null,
  "1 semaine"
 ],
 "128 KiB": [
  null,
  "128 Kio"
 ],
 "16 KiB": [
  null,
  "16 Kio"
 ],
 "2 MiB": [
  null,
  "2 Mio"
 ],
 "32 KiB": [
  null,
  "32 Kio"
 ],
 "4 KiB": [
  null,
  "4 Kio"
 ],
 "5 minutes": [
  null,
  "5 minutes"
 ],
 "512 KiB": [
  null,
  "512 Kio"
 ],
 "6 hours": [
  null,
  "6 heures"
 ],
 "64 KiB": [
  null,
  "64 Kio"
 ],
 "8 KiB": [
  null,
  "8 Kio"
 ],
 "A disk is needed.": [
  null,
  ""
 ],
 "A spare disk needs to be added first before this disk can be removed.": [
  null,
  ""
 ],
 "Activate": [
  null,
  "Activer"
 ],
 "Activating $target": [
  null,
  "Activation de $target"
 ],
 "Add": [
  null,
  "Ajouter"
 ],
 "Add Disks": [
  null,
  "Ajouter des disques"
 ],
 "Add iSCSI Portal": [
  null,
  ""
 ],
 "Adding physical volume to $target": [
  null,
  ""
 ],
 "Address": [
  null,
  "Adresse"
 ],
 "Apply": [
  null,
  "Appliquer"
 ],
 "At least $0 disks are needed.": [
  null,
  ""
 ],
 "At least one disk is needed.": [
  null,
  "Au moins un disque est nécessaire."
 ],
 "Authentication required": [
  null,
  ""
 ],
 "Available targets on $0": [
  null,
  ""
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
  ""
 ],
 "Blocked": [
  null,
  "Bloqué"
 ],
 "Can't delete while unlocked": [
  null,
  ""
 ],
 "Cancel": [
  null,
  "Annuler"
 ],
 "Change": [
  null,
  ""
 ],
 "Change iSCSI Initiator Name": [
  null,
  ""
 ],
 "Checking $target": [
  null,
  ""
 ],
 "Checking RAID Device $target": [
  null,
  ""
 ],
 "Checking and Repairing RAID Device $target": [
  null,
  ""
 ],
 "Chunk Size": [
  null,
  "Taille de bloc"
 ],
 "Cleaning up for $target": [
  null,
  ""
 ],
 "Close": [
  null,
  "Fermer"
 ],
 "Compatible with all systems and devices (MBR)": [
  null,
  "Compatible avec tous les systèmes et périphériques (MBR)"
 ],
 "Compatible with modern system and hard disks > 2TB (GPT)": [
  null,
  "Compatible avec les systèmes modernes et disques durs de taille > 2 Tio (GPT)"
 ],
 "Compression": [
  null,
  ""
 ],
 "Confirm passphrase": [
  null,
  "Confirmer la phrase de passe"
 ],
 "Content": [
  null,
  "Contenu"
 ],
 "Create": [
  null,
  "Créer"
 ],
 "Create Logical Volume": [
  null,
  ""
 ],
 "Create Partition": [
  null,
  "Créer la partition"
 ],
 "Create RAID Device": [
  null,
  "Créer un périphérique RAID"
 ],
 "Create Snapshot": [
  null,
  "Créer un instantané"
 ],
 "Create Thin Volume": [
  null,
  ""
 ],
 "Create VDO Device": [
  null,
  ""
 ],
 "Create Volume Group": [
  null,
  "Créer un groupe de volumes"
 ],
 "Create new Logical Volume": [
  null,
  ""
 ],
 "Create partition": [
  null,
  "Créer la partition"
 ],
 "Create partition on $0": [
  null,
  "Créer une partition sur $0"
 ],
 "Create partition table": [
  null,
  ""
 ],
 "Creating RAID Device $target": [
  null,
  ""
 ],
 "Creating filesystem on $target": [
  null,
  "Création du système de fichier sur $target"
 ],
 "Creating logical volume $target": [
  null,
  ""
 ],
 "Creating partition $target": [
  null,
  "Création de la partition sur $target"
 ],
 "Creating snapshot of $target": [
  null,
  ""
 ],
 "Creating volume group $target": [
  null,
  ""
 ],
 "Custom": [
  null,
  "Personnalisé"
 ],
 "Custom (Enter filesystem type)": [
  null,
  "Personnalisé (indiquer le type de système de fichiers)"
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
  ""
 ],
 "Data Used": [
  null,
  ""
 ],
 "Deactivate": [
  null,
  "Désactiver"
 ],
 "Deactivating $target": [
  null,
  ""
 ],
 "Deduplication": [
  null,
  ""
 ],
 "Default": [
  null,
  "Par défaut"
 ],
 "Delete": [
  null,
  "Supprimer"
 ],
 "Deleting $target": [
  null,
  "Suppression de $target"
 ],
 "Deleting a RAID device will erase all data on it.": [
  null,
  "Supprimer un périphérique RAID en effacera toutes les données qu'il contient."
 ],
 "Deleting a VDO device will erase all data on it.": [
  null,
  ""
 ],
 "Deleting a logical volume will delete all data in it.": [
  null,
  "Supprimer un volume logique en effacera toutes les données qu'il contient."
 ],
 "Deleting a partition will delete all data in it.": [
  null,
  "Supprimer une partition en effacera toutes les données qu'elle contient."
 ],
 "Deleting a volume group will erase all data on it.": [
  null,
  "Supprimer un groupe de volumes en effacera toutes les données qu'il contient."
 ],
 "Deleting volume group $target": [
  null,
  ""
 ],
 "Device File": [
  null,
  ""
 ],
 "Device is read-only": [
  null,
  ""
 ],
 "Disk": [
  null,
  ""
 ],
 "Disk is OK": [
  null,
  "Le disque est OK"
 ],
 "Disks": [
  null,
  "Disques"
 ],
 "Don't overwrite existing data": [
  null,
  "Ne pas écraser les données existantes"
 ],
 "Drive": [
  null,
  "Disque"
 ],
 "Drives": [
  null,
  "Disques"
 ],
 "Edit": [
  null,
  ""
 ],
 "Ejecting $target": [
  null,
  ""
 ],
 "Emptying $target": [
  null,
  ""
 ],
 "Encrypted $0": [
  null,
  ""
 ],
 "Encrypted EXT4 (LUKS)": [
  null,
  "EXT4 chiffré (LUKS)"
 ],
 "Encrypted Logical Volume of $0": [
  null,
  ""
 ],
 "Encrypted Partition of $0": [
  null,
  ""
 ],
 "Encrypted XFS (LUKS)": [
  null,
  "XFS chiffré (LUKS)"
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
  ""
 ],
 "Encryption Options": [
  null,
  "Options de chiffrement"
 ],
 "Erase": [
  null,
  "Effacer"
 ],
 "Erasing $target": [
  null,
  "Effacement de $target"
 ],
 "Error": [
  null,
  "Erreur"
 ],
 "Extended Partition": [
  null,
  "Partition étendue"
 ],
 "FAILED": [
  null,
  "EN ÉCHEC"
 ],
 "Filesystem": [
  null,
  ""
 ],
 "Filesystem Mounting": [
  null,
  ""
 ],
 "Filesystem Name": [
  null,
  ""
 ],
 "Filesystem type": [
  null,
  "Type de système de fichiers"
 ],
 "Filesystems": [
  null,
  "Systèmes de fichiers"
 ],
 "Format": [
  null,
  "Formater"
 ],
 "Format $0": [
  null,
  "Formater $0"
 ],
 "Format Disk $0": [
  null,
  "Formater le disque $0"
 ],
 "Formatting a disk will erase all data on it.": [
  null,
  "Formater un disque en effacera toutes les données qu'il contient."
 ],
 "Formatting a storage device will erase all data on it.": [
  null,
  "Formater un périphérique de stockage en effacera toutes les données qu'il contient."
 ],
 "Free": [
  null,
  "Disponible"
 ],
 "Free Space": [
  null,
  ""
 ],
 "Go to now": [
  null,
  "Aller à maintenant"
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
  "En cours de synchronisation"
 ],
 "Inactive volume": [
  null,
  ""
 ],
 "Index Memory": [
  null,
  ""
 ],
 "Invalid username or password": [
  null,
  ""
 ],
 "Jobs": [
  null,
  "Tâches"
 ],
 "Local Mount Point": [
  null,
  ""
 ],
 "Lock": [
  null,
  "Verrouiller"
 ],
 "Locking $target": [
  null,
  ""
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
  "Volume logique"
 ],
 "Logical Volume (Snapshot)": [
  null,
  "Volume logique (instantané)"
 ],
 "Logical Volume of $0": [
  null,
  ""
 ],
 "Marking $target as faulty": [
  null,
  ""
 ],
 "Member of RAID Device": [
  null,
  ""
 ],
 "Member of RAID Device $0": [
  null,
  ""
 ],
 "Metadata Used": [
  null,
  ""
 ],
 "Modifying $target": [
  null,
  ""
 ],
 "Mount": [
  null,
  "Monter"
 ],
 "Mount Options": [
  null,
  "Options de montage"
 ],
 "Mount Point": [
  null,
  "Point de montage"
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
  ""
 ],
 "Mounting": [
  null,
  "Montage"
 ],
 "Mounting $target": [
  null,
  "Montage de $target"
 ],
 "NFS Mount": [
  null,
  ""
 ],
 "NFS Mounts": [
  null,
  ""
 ],
 "NTFS - Compatible with most systems": [
  null,
  "NTFS - Compatible avec la plupart des systèmes"
 ],
 "Name": [
  null,
  "Nom"
 ],
 "Name can not be empty.": [
  null,
  "Le nom ne peut être vide."
 ],
 "Name cannot be empty.": [
  null,
  ""
 ],
 "Name cannot be longer than 127 characters.": [
  null,
  ""
 ],
 "Name cannot contain the character '$0'.": [
  null,
  ""
 ],
 "Name cannot contain whitespace.": [
  null,
  ""
 ],
 "New NFS Mount": [
  null,
  ""
 ],
 "Next": [
  null,
  "Suivant"
 ],
 "No Filesystem": [
  null,
  "Aucun système de fichiers"
 ],
 "No Logical Volumes": [
  null,
  ""
 ],
 "No NFS mounts set up": [
  null,
  ""
 ],
 "No disks are available.": [
  null,
  ""
 ],
 "No drives attached": [
  null,
  ""
 ],
 "No free space": [
  null,
  ""
 ],
 "No iSCSI targets set up": [
  null,
  ""
 ],
 "No media inserted": [
  null,
  "Aucun média inséré"
 ],
 "No partitioning": [
  null,
  "Aucun partitionnement"
 ],
 "No storage set up as RAID": [
  null,
  ""
 ],
 "No storage set up as VDO": [
  null,
  ""
 ],
 "No volume groups created": [
  null,
  ""
 ],
 "Not found": [
  null,
  "Non trouvé"
 ],
 "Not mounted": [
  null,
  ""
 ],
 "Not running": [
  null,
  ""
 ],
 "Off": [
  null,
  "Éteint"
 ],
 "On": [
  null,
  "Allumé"
 ],
 "Only $0 of $1 are used.": [
  null,
  ""
 ],
 "Operation '$operation' on $target": [
  null,
  ""
 ],
 "Options": [
  null,
  "Options"
 ],
 "Other Devices": [
  null,
  "Autres Périphériques"
 ],
 "Overwrite existing data with zeros": [
  null,
  "Écraser les données existantes avec des zéros"
 ],
 "Partition": [
  null,
  "Partition"
 ],
 "Partition of $0": [
  null,
  ""
 ],
 "Partitioning": [
  null,
  "Partitionnement"
 ],
 "Passphrase": [
  null,
  "Phrase de passe"
 ],
 "Passphrase cannot be empty": [
  null,
  ""
 ],
 "Passphrases do not match": [
  null,
  "Les phrases de passe ne correspondent pas."
 ],
 "Password": [
  null,
  "Mot de passe"
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
  ""
 ],
 "Physical Volumes": [
  null,
  ""
 ],
 "Physical volume of $0": [
  null,
  ""
 ],
 "Physical volumes can not be resized here.": [
  null,
  ""
 ],
 "Please confirm deletion of $0": [
  null,
  "Confirmer la suppression de $0"
 ],
 "Please confirm stopping of $0": [
  null,
  ""
 ],
 "Pool": [
  null,
  ""
 ],
 "Pool for Thin Logical Volumes": [
  null,
  ""
 ],
 "Pool for Thin Volumes": [
  null,
  ""
 ],
 "Pool for thinly provisioned volumes": [
  null,
  ""
 ],
 "Port": [
  null,
  ""
 ],
 "Purpose": [
  null,
  ""
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
  "RAID 0 (Réparti par bande)"
 ],
 "RAID 1": [
  null,
  "RAID 1"
 ],
 "RAID 1 (Mirror)": [
  null,
  "RAID 1 (Miroir)"
 ],
 "RAID 10": [
  null,
  "RAID 10"
 ],
 "RAID 10 (Stripe of Mirrors)": [
  null,
  ""
 ],
 "RAID 4": [
  null,
  "RAID 4"
 ],
 "RAID 4 (Dedicated Parity)": [
  null,
  "RAID 4 (Parité Dédié)"
 ],
 "RAID 5": [
  null,
  "RAID 5"
 ],
 "RAID 5 (Distributed Parity)": [
  null,
  "RAID 5 (Parité Distribué)"
 ],
 "RAID 6": [
  null,
  "RAID 6"
 ],
 "RAID 6 (Double Distributed Parity)": [
  null,
  "RAID 6 (Parité Doublement Distribué)"
 ],
 "RAID Device": [
  null,
  "Périphérique RAID"
 ],
 "RAID Device $0": [
  null,
  "Périphérique RAID $0"
 ],
 "RAID Devices": [
  null,
  "Périphériques RAID"
 ],
 "RAID Level": [
  null,
  "Niveau RAID"
 ],
 "RAID Member": [
  null,
  ""
 ],
 "Reading": [
  null,
  "Lecture"
 ],
 "Reboot": [
  null,
  "Redémarrer"
 ],
 "Recovering": [
  null,
  "Récupération en cours"
 ],
 "Recovering RAID Device $target": [
  null,
  ""
 ],
 "Remove device": [
  null,
  ""
 ],
 "Removing $target from RAID Device": [
  null,
  ""
 ],
 "Removing physical volume from $target": [
  null,
  ""
 ],
 "Rename": [
  null,
  "Renommer"
 ],
 "Rename Logical Volume": [
  null,
  ""
 ],
 "Rename Volume Group": [
  null,
  "Renommer un groupe de volumes"
 ],
 "Renaming $target": [
  null,
  ""
 ],
 "Repairing $target": [
  null,
  ""
 ],
 "Resizing $target": [
  null,
  ""
 ],
 "Running": [
  null,
  "En fonctionnement"
 ],
 "SMART self-test of $target": [
  null,
  ""
 ],
 "Securely erasing $target": [
  null,
  ""
 ],
 "Server": [
  null,
  ""
 ],
 "Server Address": [
  null,
  ""
 ],
 "Server address cannot be empty.": [
  null,
  ""
 ],
 "Server cannot be empty.": [
  null,
  ""
 ],
 "Setting up loop device $target": [
  null,
  ""
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
  "Taille"
 ],
 "Size cannot be negative": [
  null,
  ""
 ],
 "Size cannot be zero": [
  null,
  ""
 ],
 "Size is too large": [
  null,
  ""
 ],
 "Size must be a number": [
  null,
  ""
 ],
 "Size must be at least $0": [
  null,
  ""
 ],
 "Spare": [
  null,
  "Rechange"
 ],
 "Start": [
  null,
  "Démarrer"
 ],
 "Start Multipath": [
  null,
  ""
 ],
 "Start Scrubbing": [
  null,
  "Démarrer la scrutation"
 ],
 "Starting RAID Device $target": [
  null,
  ""
 ],
 "Starting swapspace $target": [
  null,
  ""
 ],
 "Stop": [
  null,
  "Arrêter"
 ],
 "Stop Device": [
  null,
  ""
 ],
 "Stop Scrubbing": [
  null,
  "Arrêter la scrutation"
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
  ""
 ],
 "Stopping swapspace $target": [
  null,
  ""
 ],
 "Storage": [
  null,
  ""
 ],
 "Storage Logs": [
  null,
  "Logs de stockage"
 ],
 "Store passphrase": [
  null,
  "Enregistrer la phrase de passe"
 ],
 "Stored Passphrase": [
  null,
  "Phrase de passe enregistrée"
 ],
 "Stored passphrase": [
  null,
  ""
 ],
 "Swap": [
  null,
  ""
 ],
 "Synchronizing RAID Device $target": [
  null,
  ""
 ],
 "Targets": [
  null,
  ""
 ],
 "The \"storaged\" API is not available on this system.": [
  null,
  ""
 ],
 "The RAID Array is in a degraded state": [
  null,
  ""
 ],
 "The RAID device must be running in order to add spare disks.": [
  null,
  ""
 ],
 "The RAID device must be running in order to remove disks.": [
  null,
  ""
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
  ""
 ],
 "The last physical volume of a volume group cannot be removed.": [
  null,
  ""
 ],
 "The user <b>$0</b> is not permitted to manage storage": [
  null,
  ""
 ],
 "There are devices with multiple paths on the system, but the multipath service is not running.": [
  null,
  ""
 ],
 "There is not enough free space elsewhere to remove this physical volume. At least $0 more free space is needed.": [
  null,
  ""
 ],
 "Thin Logical Volume": [
  null,
  ""
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
  ""
 ],
 "This device is currently used for RAID devices.": [
  null,
  ""
 ],
 "This device is currently used for RAID devices.                Proceeding will remove it from its RAID devices.": [
  null,
  ""
 ],
 "This device is currently used for VDO devices.": [
  null,
  ""
 ],
 "This device is currently used for volume groups.": [
  null,
  ""
 ],
 "This device is currently used for volume groups.                Proceeding will remove it from its volume groups.": [
  null,
  ""
 ],
 "This disk cannot be removed while the device is recovering.": [
  null,
  ""
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
  "Type"
 ],
 "UUID": [
  null,
  ""
 ],
 "Unable to reach server": [
  null,
  ""
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
  "Inconnu"
 ],
 "Unknown ($0)": [
  null,
  "Inconnu ($0)"
 ],
 "Unknown host name": [
  null,
  ""
 ],
 "Unlock": [
  null,
  "Déverrouiller"
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
  ""
 ],
 "Unmount": [
  null,
  "Démonter"
 ],
 "Unmounting $target": [
  null,
  "Démontage de $target"
 ],
 "Unrecognized Data": [
  null,
  ""
 ],
 "Unrecognized data can not be made smaller here.": [
  null,
  ""
 ],
 "Unsupported volume": [
  null,
  ""
 ],
 "Usage": [
  null,
  ""
 ],
 "Use 512 Byte emulation": [
  null,
  ""
 ],
 "Used": [
  null,
  "Utilisé(e)"
 ],
 "Username": [
  null,
  ""
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
  "VFAT - Compatible avec tous les systèmes et appareils"
 ],
 "Very securely erasing $target": [
  null,
  ""
 ],
 "Volume": [
  null,
  ""
 ],
 "Volume Group": [
  null,
  ""
 ],
 "Volume Group $0": [
  null,
  "Groupe de volumes $0"
 ],
 "Volume Groups": [
  null,
  "Groupes de volumes"
 ],
 "Write-mostly": [
  null,
  "Écriture favorisée"
 ],
 "Writing": [
  null,
  "Ecriture"
 ],
 "XFS - Red Hat Enterprise Linux 7 default": [
  null,
  "XFS - Système de fichier par défaut de Red Hat Enterprise Linux 7"
 ],
 "[$0 bytes of binary data]": [
  null,
  "[$0 octets de données binaires]"
 ],
 "[binary data]": [
  null,
  "[données binaires]"
 ],
 "[no data]": [
  null,
  "[aucune donnée]"
 ],
 "ext4 - Red Hat Enterprise Linux 6 default": [
  null,
  "ext4 - Système de fichier par défaut de Red Hat Enterprise Linux 6"
 ],
 "iSCSI Targets": [
  null,
  ""
 ],
 "unknown target": [
  null,
  ""
 ],
 "unpartitioned space on $0": [
  null,
  ""
 ],
 "storage-id-desc\u0004$0 File System": [
  null,
  "Système de fichier $0"
 ],
 "storage-id-desc\u0004Encrypted data": [
  null,
  ""
 ],
 "storage-id-desc\u0004Other Data": [
  null,
  "Autres données"
 ],
 "storage-id-desc\u0004Swap Space": [
  null,
  "Espace d'échange"
 ],
 "storage-id-desc\u0004Unrecognized Data": [
  null,
  "Données non reconnues"
 ],
 "storage-id-desc\u0004VDO Backing": [
  null,
  ""
 ],
 "storage\u0004Drive": [
  null,
  ""
 ],
 "storage\u0004Hard Disk": [
  null,
  "Disque dur"
 ],
 "storage\u0004Optical Drive": [
  null,
  "Lecteur optique"
 ],
 "storage\u0004Removable Drive": [
  null,
  "Périphérique amovible"
 ],
 "storage\u0004Solid-State Disk": [
  null,
  "Disque SSD"
 ],
 "format-bytes\u0004bytes": [
  null,
  "octets"
 ]
}));
