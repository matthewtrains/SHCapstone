let tableBody = document.querySelector(".data-table tbody")

let cheats = [

  {
    name: "DATA STRUCTURE AND ALGORITHMS ",
    learn: "recusion",
    description: ""
  },
  {
    name: "DATA STRUCTURE AND ALGORITHMS ",
    learn: "waterfall",
    description: ""
  },
  {
    name: "DATA STRUCTURE AND ALGORITHMS ",
    learn: "agile",
    description: ""
  },
  {
    name: "DATA STRUCTURE AND ALGORITHMS ",
    learn: "base case",
    description: ""
  },
  {
    name: "DATA STRUCTURE AND ALGORITHMS ",
    learn: "nodes",
    description: " fundamental units of the graph. Sometimes, nodes are also known as vertex or vertices"
  },
  {
    name: "DATA STRUCTURE AND ALGORITHMS ",
    learn: "edges",
    description: "used to connect two nodes "
  },
  {
    name: "DATA STRUCTURE AND ALGORITHMS ",
    learn: "binary tree",
    description: ""
  },
  {
    name: "DATA STRUCTURE AND ALGORITHMS ",
    learn: "push/pop",
    description: ""
  },
  {
    name: "DATA STRUCTURE AND ALGORITHMS ",
    learn: "linked list",
    description: ""
  },
  {
    name: "DATA STRUCTURE AND ALGORITHMS ",
    learn: "stack",
    description: ""
  },
  {
    name: "DATA STRUCTURE AND ALGORITHMS ",
    learn: "hashing",
    description: ""
  },
  {
    name: "DATA STRUCTURE AND ALGORITHMS ",
    learn: "salting",
    description: ""
  },
  {
    name: "DATA STRUCTURE AND ALGORITHMS ",
    learn: "hash-tables",
    description: ""
  },
  {
    name: "DATA STRUCTURE AND ALGORITHMS ",
    learn: "sorting",
    description: ""
  },
  {
    name: "DATA STRUCTURE AND ALGORITHMS ",
    learn: "traveling salesman",
    description: ""
  },
  {
    name: "DATA STRUCTURE AND ALGORITHMS ",
    learn: "deep first vs breath",
    description: ""
  },
  {
    name: "DATA STRUCTURE AND ALGORITHMS ",
    learn: "frontend/backend",
    description: ""
  },
  {
    name: "DATA STRUCTURE AND ALGORITHMS ",
    learn: "queues",
    description: ""
  },
  {
    name: "DATA STRUCTURE AND ALGORITHMS ",
    learn: "Big O Notation",
    description: "O(1) < O(log(n)) < O(n) < O(nlog(n)) < O(n^2) < O(2^n) < O(n!)"
  },
  {
    name: "DATA STRUCTURE AND ALGORITHMS ",
    learn: "graphs",
    description: "a non-linear data structure consisting of vertices and edges"
  },
  {
    name: "DATA STRUCTURE AND ALGORITHMS ",
    learn: "Vertices",
    description: " fundamental units of the graph. Sometimes, vertices are also known as vertex or nodes"
  },
  {
    name: "DATA STRUCTURE AND ALGORITHMS ",
    learn: "FIFO",
    description: "first in first out"
  },
  {
    name: "DATA STRUCTURE AND ALGORITHMS ",
    learn: "LIFO",
    description: "last in first out"
  },
  {
    name: "INTRODUCTION TO SQL DATABASES ",
    learn: "*",
    description: "wildcard for all"
  },
  {
    name: "INTRODUCTION TO SQL DATABASES ",
    learn: "avg()",
    description: "averages"
  },
  {
    name: "INTRODUCTION TO SQL DATABASES ",
    learn: "between",
    description: "value between input values"
  },
  {
    name: "INTRODUCTION TO SQL DATABASES ",
    learn: "count()",
    description: "returns the number of selected records"
  },
  {
    name: "INTRODUCTION TO SQL DATABASES ",
    learn: "drop",
    description: "deletes"
  },
  {
    name: "INTRODUCTION TO SQL DATABASES ",
    learn: "except",
    description: "excludes"
  },
  {
    name: "INTRODUCTION TO SQL DATABASES ",
    learn: "foreign key",
    description: "an identifier in  database table that points to another database table"
  },
  {
    name: "INTRODUCTION TO SQL DATABASES ",
    learn: "from",
    description: "defines where to get records"
  },
  {
    name: "INTRODUCTION TO SQL DATABASES ",
    learn: "group by",
    description: "used to arrange identical data"
  },
  {
    name: "INTRODUCTION TO SQL DATABASES ",
    learn: "having",
    description: "clause that applies conditions to groups"
  },
  {
    name: "INTRODUCTION TO SQL DATABASES ",
    learn: "inner join",
    description: "joins two table on like values"
  },
  {
    name: "INTRODUCTION TO SQL DATABASES ",
    learn: "left join",
    description: "includes all records in left table and records in right table with like values"
  },
  {
    name: "INTRODUCTION TO SQL DATABASES ",
    learn: "like",
    description: "to return records with a specific column value"
  },
  {
    name: "INTRODUCTION TO SQL DATABASES ",
    learn: "limit()",
    description: "returns set amount of records"
  },
  {
    name: "INTRODUCTION TO SQL DATABASES ",
    learn: "max()",
    description: "returns no records above"
  },
  {
    name: "INTRODUCTION TO SQL DATABASES ",
    learn: "min()",
    description: "returns nothing below"
  },
  {
    name: "INTRODUCTION TO SQL DATABASES ",
    learn: "nested queries",
    description: "query inside a query"
  },
  {
    name: "INTRODUCTION TO SQL DATABASES ",
    learn: null,
    description: "nothing input"
  },
  {
    name: "INTRODUCTION TO SQL DATABASES ",
    learn: "order by",
    description: "sort records"
  },
  {
    name: "INTRODUCTION TO SQL DATABASES ",
    learn: "outer join",
    description: "joins all records in two tables"
  },
  {
    name: "INTRODUCTION TO SQL DATABASES ",
    learn: "primary key",
    description: "unique identifier in a database table"
  },
  {
    name: "INTRODUCTION TO SQL DATABASES ",
    learn: "stored procedure",
    description: "SQL statement(s) that will be executed when procedure called. Can accept variables. Can allow user to write to a table they don't have read/write access to"
  },
  {
    name: "INTRODUCTION TO SQL DATABASES ",
    learn: "right join",
    description: "includes all records in right table and records in left table with like values"
  },
  {
    name: "INTRODUCTION TO SQL DATABASES ",
    learn: "function",
    description: "database object that contains a set of SQL statements to perform a specific task"
  },
  {
    name: "INTRODUCTION TO SQL DATABASES ",
    learn: "select",
    description: "how you define records to return"
  },
  {
    name: "INTRODUCTION TO SQL DATABASES ",
    learn: "Structured Query Language (SQL)",
    description: "Standard language for accessing and manipulating databases."
  },
  {
    name: "INTRODUCTION TO SQL DATABASES ",
    learn: "sum()",
    description: "total"
  },
  {
    name: "INTRODUCTION TO SQL DATABASES ",
    learn: "table",
    description: "an object made up of rows and columns"
  },
  {
    name: "INTRODUCTION TO SQL DATABASES ",
    learn: "text",
    description: "string of characters usually lrger in size"
  },
  {
    name: "INTRODUCTION TO SQL DATABASES ",
    learn: "top()",
    description: "first records of query returned"
  },
  {
    name: "INTRODUCTION TO SQL DATABASES ",
    learn: "union",
    description: "returns only unique records"
  },
  {
    name: "INTRODUCTION TO SQL DATABASES ",
    learn: "union all",
    description: "returns all records"
  },
  {
    name: "INTRODUCTION TO SQL DATABASES ",
    learn: "varchar()",
    description: "variable length character string"
  },
  {
    name: "INTRODUCTION TO SQL DATABASES ",
    learn: "view",
    description: "table created when called upon doesn't store data"
  },
  {
    name: "INTRODUCTION TO SQL DATABASES ",
    learn: "where",
    description: "allow filtering of records"
  },
  {
    name: "INTRODUCTION TO SQL DATABASES ",
    learn: "wildcards in sql",
    description: "characters that can represent a character or a pattern"
  },
  {
    name: "INTRODUCTION TO SQL DATABASES ",
    learn: "record",
    description: "row in a table"
  },
  {
    name: "INTRODUCTION TO SQL DATABASES ",
    learn: "row",
    description: "horizontal line in table"
  },
  {
    name: "INTRODUCTION TO SQL DATABASES ",
    learn: "column",
    description: "vertical line in table"
  },
  {
    name: "INTRODUCTION TO SQL DATABASES ",
    learn: "table structure or definition",
    description: "defines what data types, lengths, uniqueness, requirement"
  },
  {
    name: "INTRODUCTION TO SQL DATABASES ",
    learn: "query",
    description: "search for specific data"
  },
  {
    name: "INTRODUCTION TO SQL DATABASES ",
    learn: "record",
    description: "one row of data in a table"
  },
  {
    name: "UNIX/LINUX ESSENTIALS ",
    learn: ". ",
    description: "joins (catinates) right side and left side"
  },
  {
    name: "UNIX/LINUX ESSENTIALS ",
    learn: ".=",
    description: "replace left side with right side"
  },
  {
    name: "UNIX/LINUX ESSENTIALS ",
    learn: "adduser",
    description: "High level utility for adding new user accounts"
  },
  {
    name: "UNIX/LINUX ESSENTIALS ",
    learn: "bg",
    description: "Send a task to the background"
  },
  {
    name: "UNIX/LINUX ESSENTIALS ",
    learn: "biosdecode",
    description: "Get some general information about your system’s BIOS"
  },
  {
    name: "UNIX/LINUX ESSENTIALS ",
    learn: "cat /etc/resolv.conf",
    description: "See what DNS servers your system is configured to use"
  },
  {
    name: "UNIX/LINUX ESSENTIALS ",
    learn: "cat /proc/cpuinfo",
    description: "Retrieve processor type, socket, speed, configured flags, etc."
  },
  {
    name: "UNIX/LINUX ESSENTIALS ",
    learn: "cat /proc/meminfo",
    description: "See detailed information about system RAM"
  },
  {
    name: "UNIX/LINUX ESSENTIALS ",
    learn: "cat > file",
    description: "Create a new file with the text you type after"
  },
  {
    name: "UNIX/LINUX ESSENTIALS ",
    learn: "cat file",
    description: "View the contents of a file"
  },
  {
    name: "UNIX/LINUX ESSENTIALS ",
    learn: "cd",
    description: "Change directory to some other location"
  },
  {
    name: "UNIX/LINUX ESSENTIALS ",
    learn: "chgrp",
    description: "Change the group of a file or directory"
  },
  {
    name: "UNIX/LINUX ESSENTIALS ",
    learn: "chmod",
    description: "Change the file permissions for a file or directory"
  },
  {
    name: "UNIX/LINUX ESSENTIALS ",
    learn: "chown",
    description: "Change the owner of a file or directory"
  },
  {
    name: "UNIX/LINUX ESSENTIALS ",
    learn: "cp",
    description: "Copy a file or directory"
  },
  {
    name: "UNIX/LINUX ESSENTIALS ",
    learn: "delgroup",
    description: "Delete a group"
  },
  {
    name: "UNIX/LINUX ESSENTIALS ",
    learn: "deluser",
    description: "Delete a user account"
  },
  {
    name: "UNIX/LINUX ESSENTIALS ",
    learn: "df or df -h",
    description: "See the current storage usage of mounted partitions"
  },
  {
    name: "UNIX/LINUX ESSENTIALS ",
    learn: "dmidecode",
    description: "See some information about BIOS, motherboard, chassis, etc."
  },
  {
    name: "UNIX/LINUX ESSENTIALS ",
    learn: "dmidecode -s bios-vendor",
    description: "Retrieve the name of your BIOS vendor with this simple command"
  },
  {
    name: "UNIX/LINUX ESSENTIALS ",
    learn: "du",
    description: "See disk usage of a directory’s contents"
  },
  {
    name: "UNIX/LINUX ESSENTIALS ",
    learn: "echo $VARIABLE",
    description: "Display the value of a variable"
  },
  {
    name: "UNIX/LINUX ESSENTIALS ",
    learn: "export MY_SITE=\"linuxconfig.org\"\"\"",
    description: "Set a temporary environment variable (just an example, but use the same syntax)"
  },
  {
    name: "UNIX/LINUX ESSENTIALS ",
    learn: "fg",
    description: "Bring a task to the foreground"
  },
  {
    name: "UNIX/LINUX ESSENTIALS ",
    learn: "file",
    description: "View the type of any file"
  },
  {
    name: "UNIX/LINUX ESSENTIALS ",
    learn: "find",
    description: "Seach for a file or directory based on name and other parameters"
  },
  {
    name: "UNIX/LINUX ESSENTIALS ",
    learn: "free -m",
    description: "See how much memory is in use and free"
  },
  {
    name: "UNIX/LINUX ESSENTIALS ",
    learn: "grep",
    description: "searches the contents of a file that match a pattern"
  },
  {
    name: "UNIX/LINUX ESSENTIALS ",
    learn: "groupadd",
    description: "Create a new group"
  },
  {
    name: "UNIX/LINUX ESSENTIALS ",
    learn: "gunzip file.gz",
    description: "Decompress a file that has gzip compression"
  },
  {
    name: "UNIX/LINUX ESSENTIALS ",
    learn: "gzip file",
    description: "Compress a file with gzip compression"
  },
  {
    name: "UNIX/LINUX ESSENTIALS ",
    learn: "hdparm -I /dev/sdx",
    description: "Get information about your hard drive’s make, model, serial number, firmware version, and configuration"
  },
  {
    name: "UNIX/LINUX ESSENTIALS ",
    learn: "hdparm -tT /dev/sdx",
    description: "Show the speed of an installed hard drive – including cached reads and buffered disk reads"
  },
  {
    name: "UNIX/LINUX ESSENTIALS ",
    learn: "htop",
    description: "A more human readable and interactive version of top"
  },
  {
    name: "UNIX/LINUX ESSENTIALS ",
    learn: "hwinfo",
    description: "List details for all hardware, including their device files and configuration options"
  },
  {
    name: "UNIX/LINUX ESSENTIALS ",
    learn: "ip a",
    description: "Show IP address and other information for all active interfaces"
  },
  {
    name: "UNIX/LINUX ESSENTIALS ",
    learn: "ip r",
    description: "Show IP address of default gateway"
  },
  {
    name: "UNIX/LINUX ESSENTIALS ",
    learn: "kill -9 or killall -9",
    description: "Terminate a process with SIGKILL signal"
  },
  {
    name: "UNIX/LINUX ESSENTIALS ",
    learn: "kill or killall",
    description: "Terminate a process"
  },
  {
    name: "UNIX/LINUX ESSENTIALS ",
    learn: "locate",
    description: "Quickly find a file or directory that has been cached"
  },
  {
    name: "UNIX/LINUX ESSENTIALS ",
    learn: "ls",
    description: "List all the files in a directory"
  },
  {
    name: "UNIX/LINUX ESSENTIALS ",
    learn: "ls -a",
    description: "List all the files in a directory (including hidden files)"
  },
  {
    name: "UNIX/LINUX ESSENTIALS ",
    learn: "ls -l",
    description: "List all files and their details (owner, mtime, size, etc)"
  },
  {
    name: "UNIX/LINUX ESSENTIALS ",
    learn: "ls -la /dev/disk/by-id/usb-*",
    description: "Retrieve a list of USB device files"
  },
  {
    name: "UNIX/LINUX ESSENTIALS ",
    learn: "lshw",
    description: "List all hardware components and see their configuration details"
  },
  {
    name: "UNIX/LINUX ESSENTIALS ",
    learn: "lshw -C memory -short",
    description: "Detect number of RAM slots used, speed, and size"
  },
  {
    name: "UNIX/LINUX ESSENTIALS ",
    learn: "lsmod",
    description: "Find what modules are currently loaded"
  },
  {
    name: "UNIX/LINUX ESSENTIALS ",
    learn: "lspci",
    description: "See general information about host bridge, VGA controller, ethernet controller, USB controller, SATA controller, etc."
  },
  {
    name: "UNIX/LINUX ESSENTIALS ",
    learn: "lsusb",
    description: "Get a list of USB devices plugged into your system"
  },
  {
    name: "UNIX/LINUX ESSENTIALS ",
    learn: "mkdir",
    description: "Create a new directory"
  },
  {
    name: "UNIX/LINUX ESSENTIALS ",
    learn: "modinfo module_name",
    description: "Get information about any particular module"
  },
  {
    name: "UNIX/LINUX ESSENTIALS ",
    learn: "modprobe module_name",
    description: "Load a module into the kernel"
  },
  {
    name: "UNIX/LINUX ESSENTIALS ",
    learn: "modprobe --remove module_name",
    description: "Remove a module"
  },
  {
    name: "UNIX/LINUX ESSENTIALS ",
    learn: "mount and umount",
    description: "Mount and unmount a storage device or ISO file"
  },
  {
    name: "UNIX/LINUX ESSENTIALS ",
    learn: "mv",
    description: "Move or rename a file or directory"
  },
  {
    name: "UNIX/LINUX ESSENTIALS ",
    learn: "nano",
    description: "Open a file (or create new one) in nano text editor"
  },
  {
    name: "UNIX/LINUX ESSENTIALS ",
    learn: "nice",
    description: "Start a new process with a specified priority"
  },
  {
    name: "UNIX/LINUX ESSENTIALS ",
    learn: "ping",
    description: "Send a ping request to a network device"
  },
  {
    name: "UNIX/LINUX ESSENTIALS ",
    learn: "poweroff",
    description: "Shut down the system"
  },
  {
    name: "UNIX/LINUX ESSENTIALS ",
    learn: "printenv or printenv variable_name",
    description: "List all environment variables on a Linux system, or a specific one"
  },
  {
    name: "UNIX/LINUX ESSENTIALS ",
    learn: "ps aux OR ps -ef",
    description: "View all of the currently running processes"
  },
  {
    name: "UNIX/LINUX ESSENTIALS ",
    learn: "pwd",
    description: "Show the present working directory"
  },
  {
    name: "UNIX/LINUX ESSENTIALS ",
    learn: "reboot",
    description: "Reboot the system"
  },
  {
    name: "UNIX/LINUX ESSENTIALS ",
    learn: "renice",
    description: "Change the nice value of a currently running process"
  },
  {
    name: "UNIX/LINUX ESSENTIALS ",
    learn: "rm or rmdir",
    description: "Remove a file or empty directory"
  },
  {
    name: "UNIX/LINUX ESSENTIALS ",
    learn: "rm -r",
    description: "Remove a directory that isn’t empty"
  },
  {
    name: "UNIX/LINUX ESSENTIALS ",
    learn: "rsync",
    description: "Synchronize the changes of one directory to another"
  },
  {
    name: "UNIX/LINUX ESSENTIALS ",
    learn: "ssh",
    description: "Login to a remote device with SSH"
  },
  {
    name: "UNIX/LINUX ESSENTIALS ",
    learn: "sudo",
    description: "Execute a command with root permissions"
  },
  {
    name: "UNIX/LINUX ESSENTIALS ",
    learn: "sudo apt install",
    description: "Install a package on Debian based systems"
  },
  {
    name: "UNIX/LINUX ESSENTIALS ",
    learn: "sudo apt remove",
    description: "Remove a package on Debian based systems"
  },
  {
    name: "UNIX/LINUX ESSENTIALS ",
    learn: "sudo dnf install",
    description: "Install a package on Red Hat based systems"
  },
  {
    name: "UNIX/LINUX ESSENTIALS ",
    learn: "sudo dnf remove",
    description: "Remove a package on Red Hat based systems"
  },
  {
    name: "UNIX/LINUX ESSENTIALS ",
    learn: "sudo fdisk -l",
    description: "See information for all attached storage devices"
  },
  {
    name: "UNIX/LINUX ESSENTIALS ",
    learn: "tar cf my_dir.tar my_dir",
    description: "Create an uncompressed tar archive"
  },
  {
    name: "UNIX/LINUX ESSENTIALS ",
    learn: "tar cfz my_dir.tar my_dir",
    description: "Create a tar archive with gzip compression"
  },
  {
    name: "UNIX/LINUX ESSENTIALS ",
    learn: "tar xf file",
    description: "Extract the contents of any type of tar archive"
  },
  {
    name: "UNIX/LINUX ESSENTIALS ",
    learn: "top",
    description: "See a list of processes and their resource usage"
  },
  {
    name: "UNIX/LINUX ESSENTIALS ",
    learn: "touch",
    description: "Create a new, empty file, or update the modified time of an existing one"
  },
  {
    name: "UNIX/LINUX ESSENTIALS ",
    learn: "traceroute",
    description: "Trace the network path taken to a device"
  },
  {
    name: "UNIX/LINUX ESSENTIALS ",
    learn: "tree",
    description: "View the directory structure for a path"
  },
  {
    name: "UNIX/LINUX ESSENTIALS ",
    learn: "uname -a",
    description: "Output detailed information about your kernel version and architecture"
  },
  {
    name: "UNIX/LINUX ESSENTIALS ",
    learn: "unset",
    description: "Remove a variable"
  },
  {
    name: "UNIX/LINUX ESSENTIALS ",
    learn: "useradd",
    description: "Low level utility for adding new user accounts"
  },
  {
    name: "UNIX/LINUX ESSENTIALS ",
    learn: "usermod",
    description: "Modify a user account"
  },
  {
    name: "UNIX/LINUX ESSENTIALS ",
    learn: "vi ",
    description: "text editor in linux"
  },
  {
    name: "UNIX/LINUX ESSENTIALS ",
    learn: "vim",
    description: "Open a file (or create new one) in vim text editor"
  },
  {
    name: "UNIX/LINUX ESSENTIALS ",
    learn: "whereis and which",
    description: "Find where a command in PATH is located"
  },
  {
    name: "UNIX/LINUX ESSENTIALS ",
    learn: "whoami",
    description: "See which user you are currently logged in as"
  },
  {
    name: "UNIX/LINUX ESSENTIALS ",
    learn: "wodim --devices",
    description: "Locate CD or DVD device file"
  },
  {
    name: "UNIX/LINUX ESSENTIALS ",
    learn: "x86info or x86info -a",
    description: "See information about the CPU"
  },
  {
    name: "UNIX/LINUX ESSENTIALS ",
    learn: "packages",
    description: "prebuilt applictions"
  },
  {
    name: "UNIX/LINUX ESSENTIALS ",
    learn: "-h",
    description: "human readable"
  },
  {
    name: "INTERMEDIATE PROGRAMMING ",
    learn: "parallel arrays",
    description: "multiple arrays of the same size such that element place of each array is closely to that element place in each array and together represent an object or entity. "
  },
  {
    name: "INTERMEDIATE PROGRAMMING ",
    learn: "parameters",
    description: "variable in a header"
  },
  {
    name: "INTERMEDIATE PROGRAMMING ",
    learn: "--",
    description: "subract 1 from varible"
  },
  {
    name: "INTERMEDIATE PROGRAMMING ",
    learn: "!",
    description: "not  "
  },
  {
    name: "INTERMEDIATE PROGRAMMING ",
    learn: "!=",
    description: "not equal to"
  },
  {
    name: "INTERMEDIATE PROGRAMMING ",
    learn: "!==",
    description: "absolutly not equal to"
  },
  {
    name: "INTERMEDIATE PROGRAMMING ",
    learn: "%",
    description: "modulus returns remainder of number"
  },
  {
    name: "INTERMEDIATE PROGRAMMING ",
    learn: "&&",
    description: "and"
  },
  {
    name: "INTERMEDIATE PROGRAMMING ",
    learn: "//",
    description: "used to exclude line from operation and for putting comments in c sharp programming"
  },
  {
    name: "INTERMEDIATE PROGRAMMING ",
    learn: ";",
    description: "terminate a line"
  },
  {
    name: "INTERMEDIATE PROGRAMMING ",
    learn: "||",
    description: "or"
  },
  {
    name: "INTERMEDIATE PROGRAMMING ",
    learn: "++",
    description: "add 1 to varible"
  },
  {
    name: "INTERMEDIATE PROGRAMMING ",
    learn: "<",
    description: "less than"
  },
  {
    name: "INTERMEDIATE PROGRAMMING ",
    learn: "<=",
    description: "less than or equal to"
  },
  {
    name: "INTERMEDIATE PROGRAMMING ",
    learn: "<variable type>[ ] or [(int)]",
    description: "declares an array of variable type input or an array with set number of elements"
  },
  {
    name: "INTERMEDIATE PROGRAMMING ",
    learn: "==",
    description: "absolute equal to"
  },
  {
    name: "INTERMEDIATE PROGRAMMING ",
    learn: "===",
    description: "identical to"
  },
  {
    name: "INTERMEDIATE PROGRAMMING ",
    learn: ">",
    description: "greater than"
  },
  {
    name: "INTERMEDIATE PROGRAMMING ",
    learn: ">=",
    description: "great than or equal to"
  },
  {
    name: "INTERMEDIATE PROGRAMMING ",
    learn: "and",
    description: "both must be true for code to run"
  },
  {
    name: "INTERMEDIATE PROGRAMMING ",
    learn: "class",
    description: "block of code that encapsulates related data"
  },
  {
    name: "INTERMEDIATE PROGRAMMING ",
    learn: "library",
    description: ""
  },
  {
    name: "INTERMEDIATE PROGRAMMING ",
    learn: "object",
    description: "is an abstract data type created by a developer. It can include multiple properties and methods and may even contain other objects"
  },
  {
    name: "INTERMEDIATE PROGRAMMING ",
    learn: "object orient programming",
    description: "programming paradigm in computer science that relies on the concept of classes and objects."
  },
  {
    name: "INTERMEDIATE PROGRAMMING ",
    learn: "or",
    description: "if either is true code will run"
  },
  {
    name: "INTERMEDIATE PROGRAMMING ",
    learn: "sorting",
    description: "arranging in a specific way"
  },
  {
    name: "INTERMEDIATE PROGRAMMING ",
    learn: "static",
    description: "doesn't need an object to use"
  },
  {
    name: "INTERMEDIATE PROGRAMMING ",
    learn: "pass by value",
    description: "changes to a value do not stay permanent"
  },
  {
    name: "INTERMEDIATE PROGRAMMING ",
    learn: "pass by reference",
    description: "passing large amounts of data"
  },
  {
    name: "INTERMEDIATE PROGRAMMING ",
    learn: "calling a function/method/class/object",
    description: "how to use in your code"
  },
  {
    name: "INTERMEDIATE PROGRAMMING ",
    learn: "overloading",
    description: "two or more versions of same method"
  },
  {
    name: "INTERMEDIATE PROGRAMMING ",
    learn: "namespace",
    description: "name giving code area"
  },
  {
    name: "INTERMEDIATE PROGRAMMING ",
    learn: "public",
    description: "can be used from anywhere"
  },
  {
    name: "INTERMEDIATE PROGRAMMING ",
    learn: "set/unset",
    description: "in a class data members maybe declared(unset) but don't become (set) until they have a value assigned"
  },
  {
    name: "INTERMEDIATE PROGRAMMING ",
    learn: "get",
    description: "retrieve data member value"
  },
  {
    name: "INTERMEDIATE PROGRAMMING ",
    learn: "set ",
    description: "ssigns value to a data member"
  },
  {
    name: "INTERMEDIATE PROGRAMMING ",
    learn: "data member",
    description: "an object for storing data"
  },
  {
    name: "INTERMEDIATE PROGRAMMING ",
    learn: "constant",
    description: "value doesn't change"
  },
  {
    name: "INTERMEDIATE PROGRAMMING ",
    learn: "constructor",
    description: "method to set all data members at once"
  },
  {
    name: "INTERMEDIATE PROGRAMMING ",
    learn: "\"+\"\"\"",
    description: "concatenation of objects, stings, "
  },
  {
    name: "INTERMEDIATE PROGRAMMING ",
    learn: null,
    description: "no value assigned"
  },
  {
    name: "INTERMEDIATE PROGRAMMING ",
    learn: "composition",
    description: "when an object is made up of other objects"
  },
  {
    name: "INTERMEDIATE PROGRAMMING ",
    learn: "try / catch blocks",
    description: "functions to run code for errors without crashing program"
  },
  {
    name: "INTERMEDIATE PROGRAMMING ",
    learn: "DateTime()",
    description: "format for working with dates and time"
  },
  {
    name: "INTRODUCTION TO PROGRAMMING & LOGIC ",
    learn: "algorithum",
    description: "a step-by-step procedure for solving a problem or accomplishing some task. Often steps reeat over and over to find end result."
  },
  {
    name: "INTRODUCTION TO PROGRAMMING & LOGIC ",
    learn: "arguments",
    description: "what you pass to a function or method"
  },
  {
    name: "INTRODUCTION TO PROGRAMMING & LOGIC ",
    learn: "array",
    description: "series of data stored in one variable"
  },
  {
    name: "INTRODUCTION TO PROGRAMMING & LOGIC ",
    learn: "body",
    description: "actual code that will run in a function/method"
  },
  {
    name: "INTRODUCTION TO PROGRAMMING & LOGIC ",
    learn: "boolean",
    description: "variable for true or false"
  },
  {
    name: "INTRODUCTION TO PROGRAMMING & LOGIC ",
    learn: "char",
    description: "character from ASCII set"
  },
  {
    name: "INTRODUCTION TO PROGRAMMING & LOGIC ",
    learn: "Code",
    description: "Set of instructions that a computer can understand."
  },
  {
    name: "INTRODUCTION TO PROGRAMMING & LOGIC ",
    learn: "Compiler",
    description: "Program that converts code into a form that a computer can execute."
  },
  {
    name: "INTRODUCTION TO PROGRAMMING & LOGIC ",
    learn: "console",
    description: "display screen"
  },
  {
    name: "INTRODUCTION TO PROGRAMMING & LOGIC ",
    learn: "Developer",
    description: "Programmer who writes code to create software applications."
  },
  {
    name: "INTRODUCTION TO PROGRAMMING & LOGIC ",
    learn: "do while loop",
    description: "programming code is executed repeatedly if conditions continue to be met"
  },
  {
    name: "INTRODUCTION TO PROGRAMMING & LOGIC ",
    learn: "double",
    description: "percise decimal"
  },
  {
    name: "INTRODUCTION TO PROGRAMMING & LOGIC ",
    learn: "element",
    description: "position in array"
  },
  {
    name: "INTRODUCTION TO PROGRAMMING & LOGIC ",
    learn: "else",
    description: "programming code is executed if no other conditions are met"
  },
  {
    name: "INTRODUCTION TO PROGRAMMING & LOGIC ",
    learn: "elseif",
    description: "programming code is executed if conditions are met"
  },
  {
    name: "INTRODUCTION TO PROGRAMMING & LOGIC ",
    learn: "float",
    description: "decimal"
  },
  {
    name: "INTRODUCTION TO PROGRAMMING & LOGIC ",
    learn: "for loop",
    description: "programming code is executed repeatedly if conditions continue to be met"
  },
  {
    name: "INTRODUCTION TO PROGRAMMING & LOGIC ",
    learn: "function",
    description: "code that will preform some action"
  },
  {
    name: "INTRODUCTION TO PROGRAMMING & LOGIC ",
    learn: "header",
    description: "declaration of method/function"
  },
  {
    name: "INTRODUCTION TO PROGRAMMING & LOGIC ",
    learn: "if",
    description: "programming code is executed if conditions are met"
  },
  {
    name: "INTRODUCTION TO PROGRAMMING & LOGIC ",
    learn: "import",
    description: "bring into use"
  },
  {
    name: "INTRODUCTION TO PROGRAMMING & LOGIC ",
    learn: "Input",
    description: "Data or instructions that are entered into a computer."
  },
  {
    name: "INTRODUCTION TO PROGRAMMING & LOGIC ",
    learn: "instantiate",
    description: "to create a variable instance by defining a variable type and its starting value."
  },
  {
    name: "INTRODUCTION TO PROGRAMMING & LOGIC ",
    learn: "int",
    description: "number positive or negative"
  },
  {
    name: "INTRODUCTION TO PROGRAMMING & LOGIC ",
    learn: "calling a function/method/class/object",
    description: "how to use in your code"
  },
  {
    name: "INTRODUCTION TO PROGRAMMING & LOGIC ",
    learn: "loop",
    description: "open file or create one in vi text editor"
  },
  {
    name: "INTRODUCTION TO PROGRAMMING & LOGIC ",
    learn: "main",
    description: "function that runs to first strts your c sharp program"
  },
  {
    name: "INTRODUCTION TO PROGRAMMING & LOGIC ",
    learn: "method",
    description: "reusable funtion"
  },
  {
    name: "INTRODUCTION TO PROGRAMMING & LOGIC ",
    learn: "return",
    description: "data sent back to function/method caller after it runs"
  },
  {
    name: "INTRODUCTION TO PROGRAMMING & LOGIC ",
    learn: "string",
    description: "a block of data as text"
  },
  {
    name: "INTRODUCTION TO PROGRAMMING & LOGIC ",
    learn: "text",
    description: "letters or numbers"
  },
  {
    name: "INTRODUCTION TO PROGRAMMING & LOGIC ",
    learn: "variable",
    description: "place holder of date"
  },
  {
    name: "INTRODUCTION TO PROGRAMMING & LOGIC ",
    learn: "visual studio",
    description: "program to display code.(c-sharp, html, php, java, python)"
  },
  {
    name: "INTRODUCTION TO PROGRAMMING & LOGIC ",
    learn: "while loop",
    description: "programming code is executed if conditions are met"
  },
  {
    name: "INTRODUCTION TO PROGRAMMING & LOGIC ",
    learn: "void",
    description: " cannot use data outside of the function or method"
  },
  {
    name: "INTRODUCTION TO PROGRAMMING & LOGIC ",
    learn: "data type",
    description: "type of variable"
  },
  {
    name: "INTRODUCTION TO PROGRAMMING & LOGIC ",
    learn: "substrings",
    description: "functions that extract data from strings"
  },
  {
    name: "INTRODUCTION TO PROGRAMMING & LOGIC ",
    learn: "naming convention",
    description: "how we name varibles, functions, methods "
  },
  {
    name: "INTRODUCTION TO PROGRAMMING & LOGIC ",
    learn: "debug",
    description: ""
  },
  {
    name: "INTRODUCTION TO PROGRAMMING & LOGIC ",
    learn: "Stepwise Refinement ",
    description: "solving problems by starting with the problem as a whole. You break the whole problem down into pieces, and then solve each piece, breaking those down further if necessary"
  },
  {
    name: "CISCO NETWORKING ",
    learn: "Access Control List (ACL)",
    description: "A set of rules that controls traffic in and out of a network or individual device."
  },
  {
    name: "CISCO NETWORKING ",
    learn: "swrouter",
    description: "a switch and routor in one device"
  },
  {
    name: "CISCO NETWORKING ",
    learn: "interface",
    description: "a shared boundary across which two or more separate components of a computer system exchange information. The exchange can be between software, computer hardware, peripheral devices, humans, and combinations of these.[1] Some computer hardware devices, such as a touchscreen, can both send and receive data through the interface, while others such as a mouse or microphone may only provide an interface to send data to a given system."
  },
  {
    name: "CISCO NETWORKING ",
    learn: "enable",
    description: "Logs you into enable mode, which is also known as user exec mode or privileged mode"
  },
  {
    name: "CISCO NETWORKING ",
    learn: "configure terminal",
    description: "Logs you into configuration mode"
  },
  {
    name: "CISCO NETWORKING ",
    learn: "interface fastethernet/number",
    description: "Enters interface configuration mode for the specified fast ethernet interface"
  },
  {
    name: "CISCO NETWORKING ",
    learn: "reload",
    description: "An exec mode command that reboots a Cisco switch or router"
  },
  {
    name: "CISCO NETWORKING ",
    learn: "hostname name",
    description: "Sets a host name to the current Cisco network device"
  },
  {
    name: "CISCO NETWORKING ",
    learn: "copy from-location to-location",
    description: "An enable mode command that copies files from one file location to another"
  },
  {
    name: "CISCO NETWORKING ",
    learn: "copy running-config startup-config",
    description: "An enable mode command that saves the active config, replacing the startup config when a Cisco network device initializes"
  },
  {
    name: "CISCO NETWORKING ",
    learn: "copy startup-config running-config",
    description: "An enable mode command that merges the startup config with the currently active config in RAM"
  },
  {
    name: "CISCO NETWORKING ",
    learn: "write erase",
    description: "An enable mode command that deletes the startup config"
  },
  {
    name: "CISCO NETWORKING ",
    learn: "erase startup-config",
    description: "An enable mode command that deletes the startup config"
  },
  {
    name: "CISCO NETWORKING ",
    learn: "ip address ip-address mask",
    description: "Assigns an IP address and a subnet mask"
  },
  {
    name: "CISCO NETWORKING ",
    learn: "shutdown",
    description: "Used in interface configuration mode. “Shutdown” shuts down the interface, while “no shutdown” brings up the interface."
  },
  {
    name: "CISCO NETWORKING ",
    learn: "no shutdown",
    description: "Used in interface configuration mode. “Shutdown” shuts down the interface, while “no shutdown” brings up the interface."
  },
  {
    name: "CISCO NETWORKING ",
    learn: "ip default-gateway ip_address",
    description: "Sets the default gateway on a Cisco device"
  },
  {
    name: "CISCO NETWORKING ",
    learn: "show running-config",
    description: "An enable mode command that displays the current configuration"
  },
  {
    name: "CISCO NETWORKING ",
    learn: "description name-string",
    description: "A config interface command to describe or name an interface"
  },
  {
    name: "CISCO NETWORKING ",
    learn: "show running-config interface interface slot/number",
    description: "An enable mode command to display the running configuration for a specific interface"
  },
  {
    name: "CISCO NETWORKING ",
    learn: "show ip interface [type number]",
    description: "Displays the usability status of interfaces that are configured for IP"
  },
  {
    name: "CISCO NETWORKING ",
    learn: "ip name-server ",
    description: "A configure mode command that sets the IP addresses of DNS servers"
  },
  {
    name: "CISCO NETWORKING ",
    learn: "show interfaces",
    description: "Displays detailed information about interface status, settings and counters"
  },
  {
    name: "CISCO NETWORKING ",
    learn: "show interface status",
    description: "Displays the interface line status"
  },
  {
    name: "CISCO NETWORKING ",
    learn: "show interfaces switchport",
    description: "     Displays a large variety of configuration settings and current operational status, including VLAN trunking details."
  },
  {
    name: "CISCO NETWORKING ",
    learn: "show interfaces trunk",
    description: "Lists information about the currently operational trunks and the VLANs supported by those trunks"
  },
  {
    name: "CISCO NETWORKING ",
    learn: "show vlan",
    description: "   Lists each VLAN and all interfaces assigned to that VLAN but does not include trunks"
  },
  {
    name: "CISCO NETWORKING ",
    learn: "vlan",
    description: "Creates a VLAN and enters VLAN configuration mode for further definitions"
  },
  {
    name: "CISCO NETWORKING ",
    learn: "switchport access vlan",
    description: "Sets the VLAN that the interface belongs to."
  },
  {
    name: "CISCO NETWORKING ",
    learn: "switchport trunk encapsulation dot1q",
    description: "Specifies 802.1Q encapsulation on the trunk link."
  },
  {
    name: "CISCO NETWORKING ",
    learn: "switchport access",
    description: "Assigns this port to a VLAN"
  },
  {
    name: "CISCO NETWORKING ",
    learn: "vlan vlan-id ",
    description: "Configures a specific VLAN name (1 to 32 characters)"
  },
  {
    name: "CISCO NETWORKING ",
    learn: "switchport mode access ",
    description: "Configures the VLAN membership mode of a port. An access port can be assigned to only one VLAN"
  },
  {
    name: "CISCO NETWORKING ",
    learn: "switchport mode trunk ",
    description: "A trunk is a point-to-point link between two switches or between a switch and a router.."
  },
  {
    name: "CISCO NETWORKING ",
    learn: "switchport trunk {",
    description: "Sets the trunk characteristics when the interface is in trunking mode. In this mode, the switch supports simultaneous tagged and untagged traffic on a port."
  },
  {
    name: "CISCO NETWORKING ",
    learn: "encapsulation dot1q vlan-id",
    description: "A configuration mode command that defines the matching criteria to map 802.1Q frames ingress on an interface to the appropriate service instance"
  },
  {
    name: "CISCO NETWORKING ",
    learn: "password",
    description: "Lists the password that is required if the login command (with no other parameters) is con?gured"
  },
  {
    name: "CISCO NETWORKING ",
    learn: "username   password ",
    description: "A global command that de?nes one of possibly multiple user names and associated passwords used for user authentication. It is used when the login local line con?guration command has been used."
  },
  {
    name: "CISCO NETWORKING ",
    learn: "enable password ",
    description: "A configuration mode command that de?nes the password required when using the enable command"
  },
  {
    name: "CISCO NETWORKING ",
    learn: "enable secret",
    description: "A configuration mode command that sets this Cisco device password that is required for any user to enter enable mode"
  },
  {
    name: "CISCO NETWORKING ",
    learn: "service password-encryption",
    description: "A configuration mode command that directs the Cisco IOS software to encrypt the passwords, CHAP secrets, and similar data saved in its configuration file"
  },
  {
    name: "CISCO NETWORKING ",
    learn: "ip domain-name ",
    description: "Con?gures a DNS domain name "
  },
  {
    name: "CISCO NETWORKING ",
    learn: "access-list",
    description: "A configuration mode command that defines a standard IP access list"
  },
  {
    name: "CISCO NETWORKING ",
    learn: "logging",
    description: "Configures the IP address of the host that will receive the system logging (syslog) messages"
  },
  {
    name: "TCP/IP ",
    learn: "*.*.*.*",
    description: "wildcard that represents any ip address"
  },
  {
    name: "TCP/IP ",
    learn: "1.1.1.1",
    description: "1.1.1.1 is a free Domain Name System (DNS) service by the American company Cloudflare in partnership with APNIC.[7] The service functions as a recursive name server, providing domain name resolution for any host on the Internet."
  },
  {
    name: "TCP/IP ",
    learn: "Address Resolution",
    description: " A support function to assist the network devices to match the correct physical address to a known logical address. The physical address is the final piece of information required to complete the frame to be sent. AppleTalk uses AARP, and TCP/IP uses address resolution protocol (ARP). IPX does not use address resolution."
  },
  {
    name: "TCP/IP ",
    learn: "Frame",
    description: " The combination of Layer 2 headers used to carry the packet from the original source logical address to the final destination. The Layer 2 physical addresses are used to identify the next network device the packet must be passed to toward the destination logical address."
  },
  {
    name: "TCP/IP ",
    learn: "Internet Protocol version 4 (IPv4)",
    description: "Previous version of the Internet Protocol (IP), which is being replaced by IPv6."
  },
  {
    name: "TCP/IP ",
    learn: "Internet Protocol version 6 (IPv6)",
    description: "Latest version of the Internet Protocol (IP), which is the protocol used to route data on the internet."
  },
  {
    name: "TCP/IP ",
    learn: "Layer",
    description: " Layer, used with a number, it identifies a reference layer of the Open System Communication (OSI) model. This model uses Layer 1 - 7 to identify the network functionality for hardware and software, including physical and logical addressing. Layer 2 (data link layer) identifies the functions of physical addressing and Layer 3 (network layer) identifies the functions of logical addressing."
  },
  {
    name: "TCP/IP ",
    learn: "Packet",
    description: "The combination of the headers used to carry the payload or message from the original source to the final destination. A packet must be enveloped in a frame to help the physical network pass the packet."
  },
  {
    name: "TCP/IP ",
    learn: "Routed protocol",
    description: " The set of rules of the Layer 3 protocol used to create the packet of the frame that carries the message."
  },
  {
    name: "TCP/IP ",
    learn: "Subnet",
    description: "Portion of a network that is isolated from the rest of the network."
  },
  {
    name: "TCP/IP ",
    learn: "Subnet",
    description: "A TCP/IP logical group of devices connected to the same network and divided by a router from other logical groups within the network. A broadcast domain is an identified function of a subnet."
  },
  {
    name: "TCP/IP ",
    learn: "subnet mask",
    description: "Value used to specify which portion of an IP address represents the network and which portion represents the host."
  },
  {
    name: "TCP/IP ",
    learn: "TCP/IP",
    description: "Transmission Control Protocol/Internet Protocol is a Layer 3 protocol used on the Internet and most other networks in the world today. There are two versions, IPv4 and IPv6. Each version differs at Layer 3. The need for additional IP addresses prompted the creation of IPv6."
  },
  {
    name: "TCP/IP ",
    learn: "Transmission Control Protocol (TCP)",
    description: "Protocol used to transfer data over a network."
  },
  {
    name: "TCP/IP ",
    learn: "User Datagram Protocol (UDP)",
    description: "Protocol used to transfer data over a network."
  },


]

cheats.forEach(cheat => {
  let tableRow = `
    <tr>
      <td class="pa3 bb b--black-10">
        ${cheat.learn}
      </td>
      <td class="pa3 bb b--black-10">
        ${cheat.description}
      </td>
    </tr>
  `

  tableBody.insertAdjacentHTML("beforeend", tableRow)
})