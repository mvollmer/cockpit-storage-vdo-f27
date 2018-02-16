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
nplurals=2; plural=(n != 1);
return plural;
},
  "language": "es",
  "x-generator": "Zanata 3.9.6"
 },
 "$0 Block Device": [
  null,
  "$0 Dispositivo de Bloque"
 ],
 "$0 Chunk Size": [
  null,
  "$0 tamaño del fragmento"
 ],
 "$0 Disks": [
  null,
  "$0 Discos"
 ],
 "$0 data + $1 overhead used of $2 ($3)": [
  null,
  "$0 datos + $1 geneal utilizado de $2 ($3)"
 ],
 "$0 day": [
  "$0 days",
  "$0 día",
  "$0 días"
 ],
 "$0 disk is missing": [
  "$0 disks are missing",
  "Falta $0 disco",
  "Faltan $0 discos"
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
  "$0 horas",
  "$0 horas"
 ],
 "$0 is in active use": [
  null,
  "$0 esta en uso actualmente"
 ],
 "$0 minute": [
  "$0 minutes",
  "$0 minuto",
  "$0 minutos"
 ],
 "$0 month": [
  "$0 months",
  "$0 mes",
  "$0 meses"
 ],
 "$0 of $1": [
  null,
  "$0 de $1"
 ],
 "$0 used of $1 ($2 saved)": [
  null,
  "$0 usado de $1 ($2 guardado)"
 ],
 "$0 week": [
  "$0 weeks",
  "$0 semana",
  "$0 semanas"
 ],
 "$0 year": [
  "$0 years",
  "$0 año",
  "$0 años"
 ],
 "$0, $1 free": [
  null,
  "$0, $1 disponible"
 ],
 "$name (from $host)": [
  null,
  "$name (de $host)"
 ],
 "${size} ${desc}": [
  null,
  "${size} ${desc}"
 ],
 "(default)": [
  null,
  "(predeterminado)"
 ],
 "(none)": [
  null,
  "(ninguno)"
 ],
 "1 MiB": [
  null,
  "1 MiB"
 ],
 "1 day": [
  null,
  "1 día"
 ],
 "1 hour": [
  null,
  "1 hora"
 ],
 "1 week": [
  null,
  "1 semana"
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
  "5 minutos"
 ],
 "512 KiB": [
  null,
  "512 KiB"
 ],
 "6 hours": [
  null,
  "6 horas"
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
  "Es necesario un disco."
 ],
 "A spare disk needs to be added first before this disk can be removed.": [
  null,
  "Un disco de repuesto debe agregarse primero antes de este disco se puede quitar."
 ],
 "Activate": [
  null,
  "Activar"
 ],
 "Activating $target": [
  null,
  "Activando $target"
 ],
 "Add": [
  null,
  "Añadir"
 ],
 "Add Disks": [
  null,
  "Añadir discos"
 ],
 "Add iSCSI Portal": [
  null,
  "Agregar portal iSCSI"
 ],
 "Adding physical volume to $target": [
  null,
  "Añadiendo volumen físico a $target"
 ],
 "Address": [
  null,
  "Dirección"
 ],
 "Apply": [
  null,
  "Aplicar"
 ],
 "At least $0 disks are needed.": [
  null,
  "Se necesitan al menos $0 discos."
 ],
 "At least one disk is needed.": [
  null,
  "Se necesita al menos un disco."
 ],
 "Authentication required": [
  null,
  "Autentificación requerida"
 ],
 "Available targets on $0": [
  null,
  "Objetivos disponibles en $0"
 ],
 "Backing Device": [
  null,
  "Dispositivo de Respaldo"
 ],
 "Block": [
  null,
  "Bloque"
 ],
 "Block device for filesystems": [
  null,
  "Dispositivo de bloque para sistemas de archivos"
 ],
 "Blocked": [
  null,
  "Bloqueado"
 ],
 "Can't delete while unlocked": [
  null,
  "No se puede eliminar mientras está desbloqueado"
 ],
 "Cancel": [
  null,
  "Cancelar"
 ],
 "Change": [
  null,
  "Cambiar"
 ],
 "Change iSCSI Initiator Name": [
  null,
  "Cambiar Nombre Iniciador de iSCSI "
 ],
 "Checking $target": [
  null,
  ""
 ],
 "Checking RAID Device $target": [
  null,
  "Comprobando el dispositivo RAID $target"
 ],
 "Checking and Repairing RAID Device $target": [
  null,
  "Comprobando y Reparando el Dispositivo RAID $target"
 ],
 "Chunk Size": [
  null,
  "Tamaño de la porción"
 ],
 "Cleaning up for $target": [
  null,
  "Limpiando por $target"
 ],
 "Close": [
  null,
  "Cerrar"
 ],
 "Compatible with all systems and devices (MBR)": [
  null,
  "Compatible con todos los sistemas y dispositivos (MBR)"
 ],
 "Compatible with modern system and hard disks > 2TB (GPT)": [
  null,
  "Compatible con los sistemas modernos y discos duros > 2TB (GPT)"
 ],
 "Compression": [
  null,
  "Compresión"
 ],
 "Confirm passphrase": [
  null,
  "Confirmar palabra de paso"
 ],
 "Content": [
  null,
  "Contenido"
 ],
 "Create": [
  null,
  "Crear"
 ],
 "Create Logical Volume": [
  null,
  "Crear un volumen logico"
 ],
 "Create Partition": [
  null,
  "Crear Partición"
 ],
 "Create RAID Device": [
  null,
  "Crear Dispositivo RAID"
 ],
 "Create Snapshot": [
  null,
  "Crear Instantánea"
 ],
 "Create Thin Volume": [
  null,
  "Crear Volumen Delgado"
 ],
 "Create VDO Device": [
  null,
  "Crear Dispositivo VDO"
 ],
 "Create Volume Group": [
  null,
  "Crear un Grupo de Volúmenes"
 ],
 "Create new Logical Volume": [
  null,
  "Crear un nuevo Volumen Lógico"
 ],
 "Create partition": [
  null,
  "Crear partición"
 ],
 "Create partition on $0": [
  null,
  "Crear partición en $0"
 ],
 "Create partition table": [
  null,
  "Crear tabla de particiones"
 ],
 "Creating RAID Device $target": [
  null,
  "Creando dispositivo RAID $target"
 ],
 "Creating filesystem on $target": [
  null,
  "Creando sistema de archivos en $target"
 ],
 "Creating logical volume $target": [
  null,
  "Creando  Volumen Lógico $target"
 ],
 "Creating partition $target": [
  null,
  "Creando partición $target"
 ],
 "Creating snapshot of $target": [
  null,
  "Creando una imagne de $target"
 ],
 "Creating volume group $target": [
  null,
  "Creando Grupo de Volumen $target"
 ],
 "Custom": [
  null,
  "Personalizar"
 ],
 "Custom (Enter filesystem type)": [
  null,
  "Personalizado (Ingrese el sistema de archivos)"
 ],
 "Custom encryption options": [
  null,
  "Opciones de encriptación personalizadas"
 ],
 "Custom mount option": [
  null,
  "Opción de montaje personalizada"
 ],
 "Custom mount options": [
  null,
  "Opciones de montaje personalizadas"
 ],
 "DISK IS FAILING": [
  null,
  "DISCO ESTÁ FALLANDO"
 ],
 "Data Used": [
  null,
  "Datos Usados"
 ],
 "Deactivate": [
  null,
  "Desactivar"
 ],
 "Deactivating $target": [
  null,
  "Desactivando $target"
 ],
 "Deduplication": [
  null,
  "Deduplicación"
 ],
 "Default": [
  null,
  "Predeterminado"
 ],
 "Delete": [
  null,
  "Eliminar"
 ],
 "Deleting $target": [
  null,
  "Eliminando $target"
 ],
 "Deleting a RAID device will erase all data on it.": [
  null,
  "Eliminar un dispositivo RAID borrará toda la información en el."
 ],
 "Deleting a VDO device will erase all data on it.": [
  null,
  "Al borrar un dispositivo VDO borrará todos los datos en él."
 ],
 "Deleting a logical volume will delete all data in it.": [
  null,
  "Eliminar un volumen lógico borrará toda la información en el."
 ],
 "Deleting a partition will delete all data in it.": [
  null,
  "Eliminar una partición borrará toda la información en el."
 ],
 "Deleting a volume group will erase all data on it.": [
  null,
  "Eliminar un grupo de volúmenes borrará toda la información en el."
 ],
 "Deleting volume group $target": [
  null,
  "Borrando Grupo de Volumen $target"
 ],
 "Device File": [
  null,
  "Fichero de Dispositivo"
 ],
 "Device is read-only": [
  null,
  "El dispositivo es de sólo lectura"
 ],
 "Disk": [
  null,
  "Disco"
 ],
 "Disk is OK": [
  null,
  "Disco está OK"
 ],
 "Disks": [
  null,
  "Discos"
 ],
 "Don't overwrite existing data": [
  null,
  "No sobreescribir los datos existentes"
 ],
 "Drive": [
  null,
  "Disco"
 ],
 "Drives": [
  null,
  "Discos"
 ],
 "Edit": [
  null,
  "Editar"
 ],
 "Ejecting $target": [
  null,
  "Expulsando $target"
 ],
 "Emptying $target": [
  null,
  "Eliminando el contenido de $target"
 ],
 "Encrypted $0": [
  null,
  "Encriptado $0"
 ],
 "Encrypted EXT4 (LUKS)": [
  null,
  "Encriptado EXT4 (LUKS)"
 ],
 "Encrypted Logical Volume of $0": [
  null,
  "Volumen lógico encriptado de $0"
 ],
 "Encrypted Partition of $0": [
  null,
  "Partición encriptada de $0"
 ],
 "Encrypted XFS (LUKS)": [
  null,
  "Encriptado XFS (LUKS)"
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
  "Encriptación"
 ],
 "Encryption Options": [
  null,
  "Opciones de cifrado"
 ],
 "Erase": [
  null,
  "Borrar"
 ],
 "Erasing $target": [
  null,
  "Borrando $target"
 ],
 "Error": [
  null,
  "Error"
 ],
 "Extended Partition": [
  null,
  "Partición Extendida"
 ],
 "FAILED": [
  null,
  "Fallido"
 ],
 "Filesystem": [
  null,
  "Sistema de archivos"
 ],
 "Filesystem Mounting": [
  null,
  "Montando Sistema de archivos"
 ],
 "Filesystem Name": [
  null,
  "Nombre de Sistema de archivos"
 ],
 "Filesystem type": [
  null,
  "Tipo de sistema de archivos"
 ],
 "Filesystems": [
  null,
  "Archivos del sistema"
 ],
 "Format": [
  null,
  "Formato"
 ],
 "Format $0": [
  null,
  "Formatear $0"
 ],
 "Format Disk $0": [
  null,
  "Formatear Disco $0"
 ],
 "Formatting a disk will erase all data on it.": [
  null,
  "Formatear un disco eliminará todos los datos en el."
 ],
 "Formatting a storage device will erase all data on it.": [
  null,
  "Formatear un dispositivo de almacenamiento eliminará todos los datos en el."
 ],
 "Free": [
  null,
  "Libre"
 ],
 "Free Space": [
  null,
  "Espacio Libre"
 ],
 "Go to now": [
  null,
  "Ir a ahora"
 ],
 "Grow": [
  null,
  "Crecer"
 ],
 "Grow Logical Volume": [
  null,
  ""
 ],
 "Grow logical size of $0": [
  null,
  "Crece el tamaño lógico de $0"
 ],
 "Grow to take all space": [
  null,
  "Crecer para tomar todo el espacio"
 ],
 "In Sync": [
  null,
  "En Sincronía"
 ],
 "Inactive volume": [
  null,
  "Volumen inactivo"
 ],
 "Index Memory": [
  null,
  "Índice de Memoria"
 ],
 "Invalid username or password": [
  null,
  "Nombre de usuario o contraseña invalidos"
 ],
 "Jobs": [
  null,
  "Trabajos"
 ],
 "Local Mount Point": [
  null,
  "Punto de Montaje Local"
 ],
 "Lock": [
  null,
  "Bloquear"
 ],
 "Locking $target": [
  null,
  "Bloquendo $target"
 ],
 "Logical": [
  null,
  "Logico"
 ],
 "Logical Size": [
  null,
  "Tamaño Lógico"
 ],
 "Logical Volume": [
  null,
  "Volumen Lógico"
 ],
 "Logical Volume (Snapshot)": [
  null,
  "Volumen Lógico(Captura)"
 ],
 "Logical Volume of $0": [
  null,
  "Volumen lógico de $0"
 ],
 "Marking $target as faulty": [
  null,
  "Marcando $target como fallado"
 ],
 "Member of RAID Device": [
  null,
  "Miembro del dispositivo RAID"
 ],
 "Member of RAID Device $0": [
  null,
  "Miembro del dispositivo RAID $0"
 ],
 "Metadata Used": [
  null,
  "Metadatos en uso"
 ],
 "Modifying $target": [
  null,
  "Modificando $target"
 ],
 "Mount": [
  null,
  "Montar"
 ],
 "Mount Options": [
  null,
  "Opciones de Montaje"
 ],
 "Mount Point": [
  null,
  "Punto de Montaje"
 ],
 "Mount at boot": [
  null,
  "Montar en el arranque"
 ],
 "Mount options": [
  null,
  "Opciones de montaje"
 ],
 "Mount point can not be empty": [
  null,
  "El punto de montaje puede no estar vacío"
 ],
 "Mount point cannot be empty.": [
  null,
  "El punto de montaje no puede estar vacío."
 ],
 "Mount point must start with \"/\".": [
  null,
  "El punto de montaje debe empezar con \"/\"."
 ],
 "Mount read only": [
  null,
  "Montar en sólo lectura"
 ],
 "Mounted At": [
  null,
  "Montado en"
 ],
 "Mounting": [
  null,
  "Montando"
 ],
 "Mounting $target": [
  null,
  "Montando $target"
 ],
 "NFS Mount": [
  null,
  "Montar NFS"
 ],
 "NFS Mounts": [
  null,
  "Montajes NFS"
 ],
 "NTFS - Compatible with most systems": [
  null,
  "NTFS - Compatible con la mayoría de los sistemas"
 ],
 "Name": [
  null,
  "Nombre"
 ],
 "Name can not be empty.": [
  null,
  "Nombre no puede estar vacío."
 ],
 "Name cannot be empty.": [
  null,
  "El nombre no puede estar vacío."
 ],
 "Name cannot be longer than 127 characters.": [
  null,
  "El nombre no puede superar los 127 caracteres."
 ],
 "Name cannot contain the character '$0'.": [
  null,
  "El nombre no puede contener el carácter «$0»."
 ],
 "Name cannot contain whitespace.": [
  null,
  "El nombre no puede contener espacios."
 ],
 "New NFS Mount": [
  null,
  "Nuevo Montaje NFS"
 ],
 "Next": [
  null,
  "Siguiente"
 ],
 "No Filesystem": [
  null,
  "Ningún Sistema de Archivos"
 ],
 "No Logical Volumes": [
  null,
  "No hay ningún volumen lógico"
 ],
 "No NFS mounts set up": [
  null,
  "Sin ajustes de montaje NFS"
 ],
 "No disks are available.": [
  null,
  "No hay discos disponibles."
 ],
 "No drives attached": [
  null,
  "No hay dispositivos adjuntos"
 ],
 "No free space": [
  null,
  "No queda espacio disponible"
 ],
 "No iSCSI targets set up": [
  null,
  "Sin objetivos iSCSI ajustados"
 ],
 "No media inserted": [
  null,
  "No hay media insertada"
 ],
 "No partitioning": [
  null,
  "No particionar"
 ],
 "No storage set up as RAID": [
  null,
  "No se ha fijado almacenamiento como RAID"
 ],
 "No storage set up as VDO": [
  null,
  "No se ha ajustado almacenamiento como VDO"
 ],
 "No volume groups created": [
  null,
  "No hay grupos de volumen creados"
 ],
 "Not found": [
  null,
  "No encontrado"
 ],
 "Not mounted": [
  null,
  "No montado"
 ],
 "Not running": [
  null,
  "No esta corriendo"
 ],
 "Off": [
  null,
  "Apagado"
 ],
 "On": [
  null,
  "Encencido"
 ],
 "Only $0 of $1 are used.": [
  null,
  "Sólo $0 de $1 fue usado."
 ],
 "Operation '$operation' on $target": [
  null,
  "Actividad '$operation' en $target"
 ],
 "Options": [
  null,
  "Opciones"
 ],
 "Other Devices": [
  null,
  "Otros dispositivos"
 ],
 "Overwrite existing data with zeros": [
  null,
  "Sobreescribir los datos existentes con ceros"
 ],
 "Partition": [
  null,
  "Partición"
 ],
 "Partition of $0": [
  null,
  "Partición de $0"
 ],
 "Partitioning": [
  null,
  "Particionamiento"
 ],
 "Passphrase": [
  null,
  "Palabra de paso"
 ],
 "Passphrase cannot be empty": [
  null,
  "La frase de contraseña no puede estar vacía"
 ],
 "Passphrases do not match": [
  null,
  "Palabra de paso no coincide"
 ],
 "Password": [
  null,
  "Contraseña"
 ],
 "Path on Server": [
  null,
  "Ruta sobre el Servidor"
 ],
 "Path on server cannot be empty.": [
  null,
  "La ruta sobre el servidor no puede estar vacía"
 ],
 "Path on server must start with \"/\".": [
  null,
  "La ruta sobre el servidor debe empezar con \"/\"."
 ],
 "Physical": [
  null,
  "Físico"
 ],
 "Physical Volume": [
  null,
  "Volumen físico"
 ],
 "Physical Volumes": [
  null,
  "Volúmenea Físicos"
 ],
 "Physical volume of $0": [
  null,
  "Volumen físico de $0"
 ],
 "Physical volumes can not be resized here.": [
  null,
  ""
 ],
 "Please confirm deletion of $0": [
  null,
  "Por favor confirmar la eliminación de $0"
 ],
 "Please confirm stopping of $0": [
  null,
  "Por favor confirma la parada de $0"
 ],
 "Pool": [
  null,
  "Grupo"
 ],
 "Pool for Thin Logical Volumes": [
  null,
  "Reserva para Volúmenes Lógicos Delgados"
 ],
 "Pool for Thin Volumes": [
  null,
  "Grupo para Volúmenes Finos"
 ],
 "Pool for thinly provisioned volumes": [
  null,
  "Grupo para volúmenes poco aprovisionados"
 ],
 "Port": [
  null,
  "Puerto"
 ],
 "Purpose": [
  null,
  "Proposito"
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
  "RAID 0 (Stripe)"
 ],
 "RAID 1": [
  null,
  "RAID 1"
 ],
 "RAID 1 (Mirror)": [
  null,
  "RAID 1 (Espejo)"
 ],
 "RAID 10": [
  null,
  "RAID 10"
 ],
 "RAID 10 (Stripe of Mirrors)": [
  null,
  "RAID 10 (Arreglo de espejos)"
 ],
 "RAID 4": [
  null,
  "RAID 4"
 ],
 "RAID 4 (Dedicated Parity)": [
  null,
  "RAID 4 (Paridad Dedicada)"
 ],
 "RAID 5": [
  null,
  "RAID 5"
 ],
 "RAID 5 (Distributed Parity)": [
  null,
  "RAID 5 (Paridad Distribuida)"
 ],
 "RAID 6": [
  null,
  "RAID 6"
 ],
 "RAID 6 (Double Distributed Parity)": [
  null,
  "RAID 6 (Doble Paridad Distribuida)"
 ],
 "RAID Device": [
  null,
  "Dispositivo RAID"
 ],
 "RAID Device $0": [
  null,
  "Dispositivo RAID $0"
 ],
 "RAID Devices": [
  null,
  "Dispositivos RAID"
 ],
 "RAID Level": [
  null,
  "Nivel RAID"
 ],
 "RAID Member": [
  null,
  "Miembro de RAID"
 ],
 "Reading": [
  null,
  "Leyendo"
 ],
 "Reboot": [
  null,
  "Reiniciar"
 ],
 "Recovering": [
  null,
  "Recuperando"
 ],
 "Recovering RAID Device $target": [
  null,
  "Recuperando Dispositivo RAID $target"
 ],
 "Remove device": [
  null,
  "Quitar dispositivo"
 ],
 "Removing $target from RAID Device": [
  null,
  "Removiendo $target del Dispositivo RAID"
 ],
 "Removing physical volume from $target": [
  null,
  "Eliminando volumen físico de $target"
 ],
 "Rename": [
  null,
  "Renombrar"
 ],
 "Rename Logical Volume": [
  null,
  "Cambiar nombre de volumen lógico"
 ],
 "Rename Volume Group": [
  null,
  "Renombrar Grupo de Volumen"
 ],
 "Renaming $target": [
  null,
  "Renombrando $target"
 ],
 "Repairing $target": [
  null,
  ""
 ],
 "Resizing $target": [
  null,
  "Redimencionando $target"
 ],
 "Running": [
  null,
  "Corriendo"
 ],
 "SMART self-test of $target": [
  null,
  "SMART auto-diagnóstico de $target"
 ],
 "Securely erasing $target": [
  null,
  "Borrando de forma segura $target"
 ],
 "Server": [
  null,
  ""
 ],
 "Server Address": [
  null,
  "Dirección del Servidor"
 ],
 "Server address cannot be empty.": [
  null,
  "La dirección del servidor no puede estar vacía."
 ],
 "Server cannot be empty.": [
  null,
  ""
 ],
 "Setting up loop device $target": [
  null,
  "Configurando dispositivo de retorno $target"
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
  "Tamaño"
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
  "Tamaño es muy grande"
 ],
 "Size must be a number": [
  null,
  "Tamaña debe ser un número"
 ],
 "Size must be at least $0": [
  null,
  ""
 ],
 "Spare": [
  null,
  "Libre"
 ],
 "Start": [
  null,
  "Iniciar"
 ],
 "Start Multipath": [
  null,
  "Inicio multitrayecto"
 ],
 "Start Scrubbing": [
  null,
  "Iniciar Borrado"
 ],
 "Starting RAID Device $target": [
  null,
  "Iniciando dispositivo RAID $target"
 ],
 "Starting swapspace $target": [
  null,
  "Iniciando espacio de swap $target"
 ],
 "Stop": [
  null,
  "Detener"
 ],
 "Stop Device": [
  null,
  ""
 ],
 "Stop Scrubbing": [
  null,
  "Detener Borrado"
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
  "Deteniendo dispositivo RAID $target"
 ],
 "Stopping swapspace $target": [
  null,
  "Deteniendo espacio de swap $target"
 ],
 "Storage": [
  null,
  "Almacenamiento"
 ],
 "Storage Logs": [
  null,
  "Bitácoras de Almacenamiento"
 ],
 "Store passphrase": [
  null,
  "Guardar palabra de paso"
 ],
 "Stored Passphrase": [
  null,
  "Frase de paso guardada"
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
  "Objetivos"
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
  "Al usuario <b>$0</b> no le es permitido administrar el almacenamiento "
 ],
 "There are devices with multiple paths on the system, but the multipath service is not running.": [
  null,
  "Hay dispositivos con múltiples trayectos en el sistema, pero no se está ejecutando el servicio de multitrayecto."
 ],
 "There is not enough free space elsewhere to remove this physical volume. At least $0 more free space is needed.": [
  null,
  ""
 ],
 "Thin Logical Volume": [
  null,
  "Volumen Lógico Delgado"
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
  "Tipo"
 ],
 "UUID": [
  null,
  ""
 ],
 "Unable to reach server": [
  null,
  "Imposible conectar al servidor"
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
  "Desconocido"
 ],
 "Unknown ($0)": [
  null,
  "Desconocido ($0)"
 ],
 "Unknown host name": [
  null,
  "Nombre de host desconocido "
 ],
 "Unlock": [
  null,
  "Desbloquear"
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
  "Desbloquendo $target"
 ],
 "Unmount": [
  null,
  "Desmontar"
 ],
 "Unmounting $target": [
  null,
  "Desmontando $target"
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
  "Usado"
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
  "VFAT - Compatible con todos los sistemas y dispositivos"
 ],
 "Very securely erasing $target": [
  null,
  "Borrando de forma muy segura $target"
 ],
 "Volume": [
  null,
  ""
 ],
 "Volume Group": [
  null,
  "Grupo de Volúmenes"
 ],
 "Volume Group $0": [
  null,
  "Grupo de volúmenes $0 "
 ],
 "Volume Groups": [
  null,
  ""
 ],
 "Write-mostly": [
  null,
  "Escribir casi todo"
 ],
 "Writing": [
  null,
  "Escribiendo"
 ],
 "XFS - Red Hat Enterprise Linux 7 default": [
  null,
  "XFS - Red Hat Enterprise Linux 7 Predeterminado"
 ],
 "[$0 bytes of binary data]": [
  null,
  "[$0 bites de datos binarios]"
 ],
 "[binary data]": [
  null,
  "[datos binarios]"
 ],
 "[no data]": [
  null,
  "[no hay datos]"
 ],
 "ext4 - Red Hat Enterprise Linux 6 default": [
  null,
  "ext4 - Red Hat Enterprise Linux 6 Predeterminado"
 ],
 "iSCSI Targets": [
  null,
  ""
 ],
 "unknown target": [
  null,
  "destino u objetivo desconocido"
 ],
 "unpartitioned space on $0": [
  null,
  ""
 ],
 "storage-id-desc\u0004$0 File System": [
  null,
  "$0 Sistema de archivos"
 ],
 "storage-id-desc\u0004Encrypted data": [
  null,
  "Dato encriptado"
 ],
 "storage-id-desc\u0004Other Data": [
  null,
  "Otros datos"
 ],
 "storage-id-desc\u0004Swap Space": [
  null,
  "Espacio de intercambio"
 ],
 "storage-id-desc\u0004Unrecognized Data": [
  null,
  "Dato desnocnocido"
 ],
 "storage-id-desc\u0004VDO Backing": [
  null,
  ""
 ],
 "storage\u0004Drive": [
  null,
  "Unidad"
 ],
 "storage\u0004Hard Disk": [
  null,
  "Disco Duro"
 ],
 "storage\u0004Optical Drive": [
  null,
  "Disco Óptico"
 ],
 "storage\u0004Removable Drive": [
  null,
  "Disco Removible"
 ],
 "storage\u0004Solid-State Disk": [
  null,
  "Disco en Estado Sólido"
 ],
 "format-bytes\u0004bytes": [
  null,
  "bytes"
 ]
}));
