document.addEventListener("DOMContentLoaded", function() {
  
let tableBody = document.querySelector(".data-table tbody")

let cheats = [

  
	{
		name : "SQL",
		learn : "*",
		description : "wildcard for all"
	},
	{
		name : "SQL",
		learn : "avg()",
		description : "averages"
	},
	{
		name : "SQL",
		learn : "between",
		description : "value between input values"
	},
	{
		name : "SQL",
		learn : "count()",
		description : "returns the number of selected records"
	},
	{
		name : "SQL",
		learn : "drop",
		description : "deletes"
	},
	{
		name : "SQL",
		learn : "except",
		description : "excludes"
	},
	{
		name : "SQL",
		learn : "foreign key",
		description : "an identifier in  database table that points to another database table"
	},
	{
		name : "SQL",
		learn : "from",
		description : "defines where to get records"
	},
	{
		name : "SQL",
		learn : "group by",
		description : "used to arrange identical data"
	},
	{
		name : "SQL",
		learn : "having",
		description : "clause that applies conditions to groups"
	},
	{
		name : "SQL",
		learn : "inner join",
		description : "joins two table on like values"
	},
	{
		name : "SQL",
		learn : "left join",
		description : "includes all records in left table and records in right table with like values"
	},
	{
		name : "SQL",
		learn : "like",
		description : "to return records with a specific column value"
	},
	{
		name : "SQL",
		learn : "limit()",
		description : "returns set amount of records"
	},
	{
		name : "SQL",
		learn : "max()",
		description : "returns no records above"
	},
	{
		name : "SQL",
		learn : "min()",
		description : "returns nothing below"
	},
	{
		name : "SQL",
		learn : "nested queries",
		description : "query inside a query"
	},
	{
		name : "SQL",
		learn : "none",
		description : "nothing input"
	},
	{
		name : "SQL",
		learn : "order by",
		description : "sort records"
	},
	{
		name : "SQL",
		learn : "outer join",
		description : "joins all records in two tables"
	},
	{
		name : "SQL",
		learn : "primary key",
		description : "unique identifier in a database table"
	},
	{
		name : "SQL",
		learn : "stored procedure",
		description : "SQL statement(s) that will be executed when procedure called. can accept variables. can allow user to write to a table they don't have read/write access to"
	},
	{
		name : "SQL",
		learn : "right join",
		description : "includes all records in right table and records in left table with like values"
	},
	{
		name : "SQL",
		learn : "function",
		description : "database object that contains a set of SQL statements to perform a specific task"
	},
	{
		name : "SQL",
		learn : "select",
		description : "how you define records to return"
	},
	{
		name : "SQL",
		learn : "structured query language (SQL)",
		description : "standard language for accessing and manipulating databases."
	},
	{
		name : "SQL",
		learn : "sum()",
		description : "totals selected values"
	},
	{
		name : "SQL",
		learn : "table",
		description : "an object made up of rows and columns"
	},
	{
		name : "SQL",
		learn : "text",
		description : "string of characters usually lrger in size"
	},
	{
		name : "SQL",
		learn : "top()",
		description : "first records of query returned"
	},
	{
		name : "SQL",
		learn : "union",
		description : "returns only unique records"
	},
	{
		name : "SQL",
		learn : "union all",
		description : "returns all records"
	},
	{
		name : "SQL",
		learn : "varchar()",
		description : "variable length character string"
	},
	{
		name : "SQL",
		learn : "view",
		description : "table created when called upon doesn't store data"
	},
	{
		name : "SQL",
		learn : "where",
		description : "allow filtering of records"
	},
	{
		name : "SQL",
		learn : "wildcards in SQL",
		description : "characters that can represent a character or a pattern"
	},
	{
		name : "SQL",
		learn : "record",
		description : "row in a table"
	},
	{
		name : "SQL",
		learn : "row",
		description : "horizontal line in table"
	},
	{
		name : "SQL",
		learn : "column",
		description : "vertical line in table"
	},
	{
		name : "SQL",
		learn : "table structure or definition",
		description : "defines what data types, lengths, uniqueness, requirement"
	},
	{
		name : "SQL",
		learn : "query",
		description : "search for specific data"
	},
	{
		name : "SQL",
		learn : "record",
		description : "one row of data in a table"
	},
	{
		name : "linux",
		learn : ". ",
		description : "joins (catinates) right side and left side"
	},
	{
		name : "linux",
		learn : ".=",
		description : "replace left side with right side"
	},
	{
		name : "linux",
		learn : "adduser",
		description : "high level utility for adding new user accounts"
	},
	{
		name : "linux",
		learn : "bg",
		description : "send a task to the background"
	},
	{
		name : "linux",
		learn : "biosdecode",
		description : "get some general information about your system’s bios"
	},
	{
		name : "linux",
		learn : "cat /etc/resolv.conf",
		description : "see what dns servers your system is configured to use"
	},
	{
		name : "linux",
		learn : "cat /proc/cpuinfo",
		description : "retrieve processor type, socket, speed, configured flags, etc."
	},
	{
		name : "linux",
		learn : "cat /proc/meminfo",
		description : "see detailed information about system ram"
	},
	{
		name : "linux",
		learn : "cat > file",
		description : "create a new file with the text you type after"
	},
	{
		name : "linux",
		learn : "cat file",
		description : "view the contents of a file"
	},
	{
		name : "linux",
		learn : "cd",
		description : "change directory to some other location"
	},
	{
		name : "linux",
		learn : "chgrp",
		description : "change the group of a file or directory"
	},
	{
		name : "linux",
		learn : "chmod",
		description : "change the file permissions for a file or directory"
	},
	{
		name : "linux",
		learn : "chown",
		description : "change the owner of a file or directory"
	},
	{
		name : "linux",
		learn : "cp",
		description : "copy a file or directory"
	},
	{
		name : "linux",
		learn : "delgroup",
		description : "delete a group"
	},
	{
		name : "linux",
		learn : "deluser",
		description : "delete a user account"
	},
	{
		name : "linux",
		learn : "df or df -h",
		description : "see the current storage usage of mounted partitions"
	},
	{
		name : "linux",
		learn : "dmidecode",
		description : "see some information about bios, motherboard, chassis, etc."
	},
	{
		name : "linux",
		learn : "dmidecode -s bios-vendor",
		description : "retrieve the name of your bios vendor with this simple command"
	},
	{
		name : "linux",
		learn : "du",
		description : "see disk usage of a directory’s contents"
	},
	{
		name : "linux",
		learn : "echo $variable",
		description : "display the value of a variable"
	},
	{
		name : "linux",
		learn : "export my_site=\"linuxconfig.org\"\"\"",
		description : "set a temporary environment variable (just an example, but use the same syntax)"
	},
	{
		name : "linux",
		learn : "fg",
		description : "bring a task to the foreground"
	},
	{
		name : "linux",
		learn : "file",
		description : "view the type of any file"
	},
	{
		name : "linux",
		learn : "find",
		description : "seach for a file or directory based on name and other parameters"
	},
	{
		name : "linux",
		learn : "free -m",
		description : "see how much memory is in use and free"
	},
	{
		name : "linux",
		learn : "grep",
		description : "searches the contents of a file that match a pattern"
	},
	{
		name : "linux",
		learn : "groupadd",
		description : "create a new group"
	},
	{
		name : "linux",
		learn : "gunzip file.gz",
		description : "decompress a file that has gzip compression"
	},
	{
		name : "linux",
		learn : "gzip file",
		description : "compress a file with gzip compression"
	},
	{
		name : "linux",
		learn : "hdparm -i /dev/sdx",
		description : "get information about your hard drive’s make, model, serial number, firmware version, and configuration"
	},
	{
		name : "linux",
		learn : "hdparm -tt /dev/sdx",
		description : "show the speed of an installed hard drive – including cached reads and buffered disk reads"
	},
	{
		name : "linux",
		learn : "htop",
		description : "a more human readable and interactive version of top"
	},
	{
		name : "linux",
		learn : "hwinfo",
		description : "list details for all hardware, including their device files and configuration options"
	},
	{
		name : "linux",
		learn : "ip a",
		description : "show ip address and other information for all active interfaces"
	},
	{
		name : "linux",
		learn : "ip r",
		description : "show ip address of default gateway"
	},
	{
		name : "linux",
		learn : "kill -9 or killall -9",
		description : "terminate a process with sigkill signal"
	},
	{
		name : "linux",
		learn : "kill or killall",
		description : "terminate a process"
	},
	{
		name : "linux",
		learn : "locate",
		description : "quickly find a file or directory that has been cached"
	},
	{
		name : "linux",
		learn : "ls",
		description : "list all the files in a directory"
	},
	{
		name : "linux",
		learn : "ls -a",
		description : "list all the files in a directory (including hidden files)"
	},
	{
		name : "linux",
		learn : "ls -l",
		description : "list all files and their details (owner, mtime, size, etc)"
	},
	{
		name : "linux",
		learn : "ls -la /dev/disk/by-id/usb-*",
		description : "retrieve a list of usb device files"
	},
	{
		name : "linux",
		learn : "lshw",
		description : "list all hardware components and see their configuration details"
	},
	{
		name : "linux",
		learn : "lshw -c memory -short",
		description : "detect number of ram slots used, speed, and size"
	},
	{
		name : "linux",
		learn : "lsmod",
		description : "find what modules are currently loaded"
	},
	{
		name : "linux",
		learn : "lspci",
		description : "see general information about host bridge, vga controller, ethernet controller, usb controller, sata controller, etc."
	},
	{
		name : "linux",
		learn : "lsusb",
		description : "get a list of usb devices plugged into your system"
	},
	{
		name : "linux",
		learn : "mkdir",
		description : "create a new directory"
	},
	{
		name : "linux",
		learn : "modinfo module_name",
		description : "get information about any particular module"
	},
	{
		name : "linux",
		learn : "modprobe module_name",
		description : "load a module into the kernel"
	},
	{
		name : "linux",
		learn : "modprobe --remove module_name",
		description : "remove a module"
	},
	{
		name : "linux",
		learn : "mount and umount",
		description : "mount and unmount a storage device or iso file"
	},
	{
		name : "linux",
		learn : "mv",
		description : "move or rename a file or directory"
	},
	{
		name : "linux",
		learn : "nano",
		description : "open a file (or create new one) in nano text editor"
	},
	{
		name : "linux",
		learn : "nice",
		description : "start a new process with a specified priority"
	},
	{
		name : "linux",
		learn : "ping",
		description : "send a ping request to a network device"
	},
	{
		name : "linux",
		learn : "poweroff",
		description : "shut down the system"
	},
	{
		name : "linux",
		learn : "printenv or printenv variable_name",
		description : "list all environment variables on a linux system, or a specific one"
	},
	{
		name : "linux",
		learn : "ps aux or ps -ef",
		description : "view all of the currently running processes"
	},
	{
		name : "linux",
		learn : "pwd",
		description : "show the present working directory"
	},
	{
		name : "linux",
		learn : "reboot",
		description : "reboot the system"
	},
	{
		name : "linux",
		learn : "renice",
		description : "change the nice value of a currently running process"
	},
	{
		name : "linux",
		learn : "rm or rmdir",
		description : "remove a file or empty directory"
	},
	{
		name : "linux",
		learn : "rm -r",
		description : "remove a directory that isn’t empty"
	},
	{
		name : "linux",
		learn : "rsync",
		description : "synchronize the changes of one directory to another"
	},
	{
		name : "linux",
		learn : "ssh",
		description : "login to a remote device with ssh"
	},
	{
		name : "linux",
		learn : "sudo",
		description : "execute a command with root permissions"
	},
	{
		name : "linux",
		learn : "sudo apt install",
		description : "install a package on debian based systems"
	},
	{
		name : "linux",
		learn : "sudo apt remove",
		description : "remove a package on debian based systems"
	},
	{
		name : "linux",
		learn : "sudo dnf install",
		description : "install a package on red hat based systems"
	},
	{
		name : "linux",
		learn : "sudo dnf remove",
		description : "remove a package on red hat based systems"
	},
	{
		name : "linux",
		learn : "sudo fdisk -l",
		description : "see information for all attached storage devices"
	},
	{
		name : "linux",
		learn : "tar cf my_dir.tar my_dir",
		description : "create an uncompressed tar archive"
	},
	{
		name : "linux",
		learn : "tar cfz my_dir.tar my_dir",
		description : "create a tar archive with gzip compression"
	},
	{
		name : "linux",
		learn : "tar xf file",
		description : "extract the contents of any type of tar archive"
	},
	{
		name : "linux",
		learn : "top",
		description : "see a list of processes and their resource usage"
	},
	{
		name : "linux",
		learn : "touch",
		description : "create a new, empty file, or update the modified time of an existing one"
	},
	{
		name : "linux",
		learn : "traceroute",
		description : "trace the network path taken to a device"
	},
	{
		name : "linux",
		learn : "tree",
		description : "view the directory structure for a path"
	},
	{
		name : "linux",
		learn : "uname -a",
		description : "output detailed information about your kernel version and architecture"
	},
	{
		name : "linux",
		learn : "unset",
		description : "remove a variable"
	},
	{
		name : "linux",
		learn : "useradd",
		description : "low level utility for adding new user accounts"
	},
	{
		name : "linux",
		learn : "usermod",
		description : "modify a user account"
	},
	{
		name : "linux",
		learn : "vi ",
		description : "text editor in linux"
	},
	{
		name : "linux",
		learn : "vim",
		description : "open a file (or create new one) in vim text editor"
	},
	{
		name : "linux",
		learn : "whereis and which",
		description : "find where a command in path is located"
	},
	{
		name : "linux",
		learn : "whoami",
		description : "see which user you are currently logged in as"
	},
	{
		name : "linux",
		learn : "wodim --devices",
		description : "locate cd or dvd device file"
	},
	{
		name : "linux",
		learn : "x86info or x86info -a",
		description : "see information about the cpu"
	},
	{
		name : "linux",
		learn : "packages",
		description : "prebuilt applictions"
	},
	{
		name : "linux",
		learn : "-h",
		description : "human readable"
	},
	{
		name : "programming",
		learn : "parallel arrays",
		description : "multiple arrays of the same size such that element place of each array is closely to that element place in each array and together represent an object or entity. "
	},
	{
		name : "programming",
		learn : "parameters",
		description : "variable in a header"
	},
	{
		name : "programming",
		learn : "--",
		description : "subract 1 from varible"
	},
	{
		name : "programming",
		learn : "!",
		description : "not  "
	},
	{
		name : "programming",
		learn : "!=",
		description : "not equal to"
	},
	{
		name : "programming",
		learn : "!==",
		description : "absolutly not equal to"
	},
	{
		name : "programming",
		learn : "%",
		description : "modulus returns remainder of number"
	},
	{
		name : "programming",
		learn : "&&",
		description : "and"
	},
	{
		name : "programming",
		learn : "//",
		description : "used to exclude line from operation and for putting comments in c sharp programming"
	},
	{
		name : "programming",
		learn : ";",
		description : "terminate a line"
	},
	{
		name : "programming",
		learn : "||",
		description : "or"
	},
	{
		name : "programming",
		learn : "++",
		description : "add 1 to varible"
	},
	{
		name : "programming",
		learn : "<",
		description : "less than"
	},
	{
		name : "programming",
		learn : "<=",
		description : "less than or equal to"
	},
	{
		name : "programming",
		learn : "<variable type>[ ] or [(int)]",
		description : "declares an array of variable type input or an array with set number of elements"
	},
	{
		name : "programming",
		learn : "==",
		description : "absolute equal to"
	},
	{
		name : "programming",
		learn : "===",
		description : "identical to"
	},
	{
		name : "programming",
		learn : ">",
		description : "greater than"
	},
	{
		name : "programming",
		learn : ">=",
		description : "great than or equal to"
	},
	{
		name : "programming",
		learn : "and",
		description : "both must be true for code to run"
	},
	{
		name : "programming",
		learn : "class",
		description : "block of code that encapsulates related data"
	},
	{
		name : "programming",
		learn : "library",
		description : ""
	},
	{
		name : "programming",
		learn : "object",
		description : "is an abstract data type created by a developer. it can include multiple properties and methods and may even contain other objects"
	},
	{
		name : "programming",
		learn : "object orient programming",
		description : "programming paradigm in computer science that relies on the concept of classes and objects."
	},
	{
		name : "programming",
		learn : "or",
		description : "if either is true code will run"
	},
	{
		name : "programming",
		learn : "sorting",
		description : "arranging in a specific way"
	},
	{
		name : "programming",
		learn : "static",
		description : "doesn't need an object to use"
	},
	{
		name : "programming",
		learn : "pass by value",
		description : "changes to a value do not stay permanent"
	},
	{
		name : "programming",
		learn : "pass by reference",
		description : "passing large amounts of data"
	},
	{
		name : "programming",
		learn : "calling a function/method/class/object",
		description : "how to use in your code"
	},
	{
		name : "programming",
		learn : "overloading",
		description : "two or more versions of same method"
	},
	{
		name : "programming",
		learn : "namespace",
		description : "name giving code area"
	},
	{
		name : "programming",
		learn : "public",
		description : "can be used from anywhere"
	},
	{
		name : "programming",
		learn : "set/unset",
		description : "in a class data members maybe declared(unset) but don't become (set) until they have a value assigned"
	},
	{
		name : "programming",
		learn : "get",
		description : "retrieve data member value"
	},
	{
		name : "programming",
		learn : "set ",
		description : "ssigns value to a data member"
	},
	{
		name : "programming",
		learn : "data member",
		description : "an object for storing data"
	},
	{
		name : "programming",
		learn : "constant",
		description : "value doesn't change"
	},
	{
		name : "programming",
		learn : "constructor",
		description : "method to set all data members at once"
	},
	{
		name : "programming",
		learn : "\"+\"\"\"",
		description : "concatenation of objects, stings, "
	},
	{
		name : "programming",
		learn : "none",
		description : "no value assigned"
	},
	{
		name : "programming",
		learn : "composition",
		description : "when an object is made up of other objects"
	},
	{
		name : "programming",
		learn : "try / catch blocks",
		description : "functions to run code for errors without crashing program"
	},
	{
		name : "programming",
		learn : "datetime()",
		description : "format for working with dates and time"
	},
	{
		name : "programming",
		learn : "algorithum",
		description : "a step-by-step procedure for solving a problem or accomplishing some task. often steps reeat over and over to find end result."
	},
	{
		name : "programming",
		learn : "arguments",
		description : "what you pass to a function or method"
	},
	{
		name : "programming",
		learn : "array",
		description : "series of data stored in one variable"
	},
	{
		name : "programming",
		learn : "body",
		description : "actual code that will run in a function/method"
	},
	{
		name : "programming",
		learn : "boolean",
		description : "variable for true or false"
	},
	{
		name : "programming",
		learn : "char",
		description : "character from ascii set"
	},
	{
		name : "programming",
		learn : "code",
		description : "set of instructions that a computer can understand."
	},
	{
		name : "programming",
		learn : "compiler",
		description : "program that converts code into a form that a computer can execute."
	},
	{
		name : "programming",
		learn : "console",
		description : "display screen"
	},
	{
		name : "programming",
		learn : "developer",
		description : "programmer who writes code to create software applications."
	},
	{
		name : "programming",
		learn : "do while loop",
		description : "programming code is executed repeatedly if conditions continue to be met"
	},
	{
		name : "programming",
		learn : "double",
		description : "percise decimal"
	},
	{
		name : "programming",
		learn : "element",
		description : "position in array"
	},
	{
		name : "programming",
		learn : "else",
		description : "programming code is executed if no other conditions are met"
	},
	{
		name : "programming",
		learn : "elseif",
		description : "programming code is executed if conditions are met"
	},
	{
		name : "programming",
		learn : "float",
		description : "decimal"
	},
	{
		name : "programming",
		learn : "for loop",
		description : "programming code is executed repeatedly if conditions continue to be met"
	},
	{
		name : "programming",
		learn : "function",
		description : "code that will preform some action"
	},
	{
		name : "programming",
		learn : "header",
		description : "declaration of method/function"
	},
	{
		name : "programming",
		learn : "if",
		description : "programming code is executed if conditions are met"
	},
	{
		name : "programming",
		learn : "import",
		description : "bring into use"
	},
	{
		name : "programming",
		learn : "input",
		description : "data or instructions that are entered into a computer."
	},
	{
		name : "programming",
		learn : "instantiate",
		description : "to create a variable instance by defining a variable type and its starting value."
	},
	{
		name : "programming",
		learn : "int",
		description : "number positive or negative"
	},
	{
		name : "programming",
		learn : "calling a function/method/class/object",
		description : "how to use in your code"
	},
	{
		name : "programming",
		learn : "loop",
		description : "open file or create one in vi text editor"
	},
	{
		name : "programming",
		learn : "main",
		description : "function that runs to first strts your c sharp program"
	},
	{
		name : "programming",
		learn : "method",
		description : "reusable funtion"
	},
	{
		name : "programming",
		learn : "return",
		description : "data sent back to function/method caller after it runs"
	},
	{
		name : "programming",
		learn : "string",
		description : "a block of data as text"
	},
	{
		name : "programming",
		learn : "text",
		description : "letters or numbers"
	},
	{
		name : "programming",
		learn : "variable",
		description : "place holder of date"
	},
	{
		name : "programming",
		learn : "visual studio",
		description : "program to display code.(c-sharp, html, php, java, python)"
	},
	{
		name : "programming",
		learn : "while loop",
		description : "programming code is executed if conditions are met"
	},
	{
		name : "programming",
		learn : "void",
		description : " cannot use data outside of the function or method"
	},
	{
		name : "programming",
		learn : "data type",
		description : "type of variable"
	},
	{
		name : "programming",
		learn : "substrings",
		description : "functions that extract data from strings"
	},
	{
		name : "programming",
		learn : "naming convention",
		description : "how we name varibles, functions, methods "
	},
	{
		name : "programming",
		learn : "debug",
		description : ""
	},
	{
		name : "programming",
		learn : "stepwise refinement ",
		description : "solving problems by starting with the problem as a whole. you break the whole problem down into pieces, and then solve each piece, breaking those down further if necessary"
	},
	{
		name : "cisco",
		learn : "access control list (acl)",
		description : "a set of rules that controls traffic in and out of a network or individual device."
	},
	{
		name : "cisco",
		learn : "swrouter",
		description : "a switch and routor in one device"
	},
	{
		name : "cisco",
		learn : "interface",
		description : "a shared boundary across which two or more separate components of a computer system exchange information. the exchange can be between software, computer hardware, peripheral devices, humans, and combinations of these.[1] some computer hardware devices, such as a touchscreen, can both send and receive data through the interface, while others such as a mouse or microphone may only provide an interface to send data to a given system."
	},
	{
		name : "cisco",
		learn : "enable",
		description : "logs you into enable mode, which is also known as user exec mode or privileged mode"
	},
	{
		name : "cisco",
		learn : "configure terminal",
		description : "logs you into configuration mode"
	},
	{
		name : "cisco",
		learn : "interface fastethernet/number",
		description : "enters interface configuration mode for the specified fast ethernet interface"
	},
	{
		name : "cisco",
		learn : "reload",
		description : "an exec mode command that reboots a cisco switch or router"
	},
	{
		name : "cisco",
		learn : "hostname name",
		description : "sets a host name to the current cisco network device"
	},
	{
		name : "cisco",
		learn : "copy from-location to-location",
		description : "an enable mode command that copies files from one file location to another"
	},
	{
		name : "cisco",
		learn : "copy running-config startup-config",
		description : "an enable mode command that saves the active config, replacing the startup config when a cisco network device initializes"
	},
	{
		name : "cisco",
		learn : "copy startup-config running-config",
		description : "an enable mode command that merges the startup config with the currently active config in ram"
	},
	{
		name : "cisco",
		learn : "write erase",
		description : "an enable mode command that deletes the startup config"
	},
	{
		name : "cisco",
		learn : "erase startup-config",
		description : "an enable mode command that deletes the startup config"
	},
	{
		name : "cisco",
		learn : "ip address ip-address mask",
		description : "assigns an ip address and a subnet mask"
	},
	{
		name : "cisco",
		learn : "shutdown",
		description : "used in interface configuration mode. “shutdown” shuts down the interface, while “no shutdown” brings up the interface."
	},
	{
		name : "cisco",
		learn : "no shutdown",
		description : "used in interface configuration mode. “shutdown” shuts down the interface, while “no shutdown” brings up the interface."
	},
	{
		name : "cisco",
		learn : "ip default-gateway ip_address",
		description : "sets the default gateway on a cisco device"
	},
	{
		name : "cisco",
		learn : "show running-config",
		description : "an enable mode command that displays the current configuration"
	},
	{
		name : "cisco",
		learn : "description name-string",
		description : "a config interface command to describe or name an interface"
	},
	{
		name : "cisco",
		learn : "show running-config interface interface slot/number",
		description : "an enable mode command to display the running configuration for a specific interface"
	},
	{
		name : "cisco",
		learn : "show ip interface [type number]",
		description : "displays the usability status of interfaces that are configured for ip"
	},
	{
		name : "cisco",
		learn : "ip name-server ",
		description : "a configure mode command that sets the ip addresses of dns servers"
	},
	{
		name : "cisco",
		learn : "show interfaces",
		description : "displays detailed information about interface status, settings and counters"
	},
	{
		name : "cisco",
		learn : "show interface status",
		description : "displays the interface line status"
	},
	{
		name : "cisco",
		learn : "show interfaces switchport",
		description : "     displays a large variety of configuration settings and current operational status, including vlan trunking details."
	},
	{
		name : "cisco",
		learn : "show interfaces trunk",
		description : "lists information about the currently operational trunks and the vlans supported by those trunks"
	},
	{
		name : "cisco",
		learn : "show vlan",
		description : "   lists each vlan and all interfaces assigned to that vlan but does not include trunks"
	},
	{
		name : "cisco",
		learn : "vlan",
		description : "creates a vlan and enters vlan configuration mode for further definitions"
	},
	{
		name : "cisco",
		learn : "switchport access vlan",
		description : "sets the vlan that the interface belongs to."
	},
	{
		name : "cisco",
		learn : "switchport trunk encapsulation dot1q",
		description : "specifies 802.1q encapsulation on the trunk link."
	},
	{
		name : "cisco",
		learn : "switchport access",
		description : "assigns this port to a vlan"
	},
	{
		name : "cisco",
		learn : "vlan vlan-id ",
		description : "configures a specific vlan name (1 to 32 characters)"
	},
	{
		name : "cisco",
		learn : "switchport mode access ",
		description : "configures the vlan membership mode of a port. an access port can be assigned to only one vlan"
	},
	{
		name : "cisco",
		learn : "switchport mode trunk ",
		description : "a trunk is a point-to-point link between two switches or between a switch and a router.."
	},
	{
		name : "cisco",
		learn : "switchport trunk {",
		description : "sets the trunk characteristics when the interface is in trunking mode. in this mode, the switch supports simultaneous tagged and untagged traffic on a port."
	},
	{
		name : "cisco",
		learn : "encapsulation dot1q vlan-id",
		description : "a configuration mode command that defines the matching criteria to map 802.1q frames ingress on an interface to the appropriate service instance"
	},
	{
		name : "cisco",
		learn : "password",
		description : "lists the password that is required if the login command (with no other parameters) is con?gured"
	},
	{
		name : "cisco",
		learn : "username   password ",
		description : "a global command that de?nes one of possibly multiple user names and associated passwords used for user authentication. it is used when the login local line con?guration command has been used."
	},
	{
		name : "cisco",
		learn : "enable password ",
		description : "a configuration mode command that de?nes the password required when using the enable command"
	},
	{
		name : "cisco",
		learn : "enable secret",
		description : "a configuration mode command that sets this cisco device password that is required for any user to enter enable mode"
	},
	{
		name : "cisco",
		learn : "service password-encryption",
		description : "a configuration mode command that directs the cisco ios software to encrypt the passwords, chap secrets, and similar data saved in its configuration file"
	},
	{
		name : "cisco",
		learn : "ip domain-name ",
		description : "con?gures a dns domain name "
	},
	{
		name : "cisco",
		learn : "access-list",
		description : "a configuration mode command that defines a standard ip access list"
	},
	{
		name : "cisco",
		learn : "logging",
		description : "configures the ip address of the host that will receive the system logging (syslog) messages"
	},
	{
		name : "Windows",
		learn : "append",
		description : "the append command can be used by programs to open files in another directory as if they were located in the current directory. the append command is available in ms-dos as well as in allÂ 32-bitÂ versions of Windows. the append command is not available in 64-bit versions of Windows."
	},
	{
		name : "Windows",
		learn : "arp (command)",
		description : "the arp command is used to display or change entries in the arp cache. the arp command is available in all versions of Windows."
	},
	{
		name : "Windows",
		learn : "assoc",
		description : "the assoc command is used to display or change the file type associated with a particularÂ file extension. the assoc command is available in Windows 11, Windows 10, Windows 8, Windows 7, Windows vista, and Windows xp."
	},
	{
		name : "Windows",
		learn : "at",
		description : "theÂ at commandÂ is used to schedule commands and other programs to run at a specific date and time. the at command is available in Windows 7, Windows vista, and Windows xp. beginning in Windows 8, command line task scheduling should instead be completed with the schtasks command."
	},
	{
		name : "Windows",
		learn : "atmadm",
		description : "the atmadm command is used to display information related to asynchronous transfer mode (atm) connections on the system. the atmadm command is available in Windows xp. support for atm was removed beginning in Windows vista, making the atmadm command unnecessary."
	},
	{
		name : "Windows",
		learn : "attrib",
		description : "theÂ attrib commandÂ is used to change theÂ attributesÂ of a single file or a directory. the attrib command is available in all versions of Windows, as well as in ms-dos."
	},
	{
		name : "Windows",
		learn : "auditpol",
		description : "the auditpol command is used to display or change audit policies. the auditpol command is available in Windows 11, Windows 10, Windows 8, Windows 7, and Windows vista."
	},
	{
		name : "Windows",
		learn : "bcdboot",
		description : "the bcdboot command is used to copyÂ boot filesÂ to the systemÂ partitionÂ and to create a new system bcd store. the bcdboot command is available in Windows 11, Windows 10, Windows 8, and Windows 7."
	},
	{
		name : "Windows",
		learn : "bcdedit",
		description : "the bcdedit command is used to view or make changes to boot configuration data. the bcdedit command is available in Windows 11, Windows 10, Windows 8, Windows 7, and Windows vista. the bcdedit command replaced the bootcfg command beginning in Windows vista."
	},
	{
		name : "Windows",
		learn : "bdehdcfg",
		description : "the bdehdcfg command is used to prepare aÂ hard driveÂ for bitlocker drive encryption. the bdehdcfg command is available in Windows 11, Windows 10, Windows 8, and Windows 7."
	},
	{
		name : "Windows",
		learn : "bitsadmin",
		description : "the bitsadmin command is used to create, manage, and monitor download and upload jobs. the bitsadmin command is available in Windows 11, Windows 10, Windows 8, Windows 7, and Windows vista. While the bitsadmin command is available in those versions of Windows, it is being phased outâ€”the bits powershell cmdlets should be used instead."
	},
	{
		name : "Windows",
		learn : "bootcfg",
		description : "the bootcfg command is used to build, modify, or view the contents of the boot.ini file, aÂ hidden fileÂ that is used to identify in what folder, on which partition, and on which hard drive Windows is located. the bootcfg command is available in Windows 10, Windows 8, Windows 7, Windows vista, and Windows xp. the bootcfg command was replaced by the bcdedit command beginning in Windows vista. bootcfg is still available in Windows 10, 8, 7, and vista, but it serves no real value since boot.ini is not used in these operating systems."
	},
	{
		name : "Windows",
		learn : "bootsect",
		description : "the bootsect command is used to configure theÂ master boot codeÂ to one compatible withÂ bootmgrÂ (vista and later) orÂ ntldrÂ (xp and earlier). the bootsect command is available in Windows 11, Windows 10, and Windows 8. the bootsect command is also available in Windows 7 and Windows vista but only from the command prompt available inÂ system recovery options."
	},
	{
		name : "Windows",
		learn : "break",
		description : "the break command sets or clears extendedÂ ctrl+cÂ checking on dos systems. the break command is available in all versions of Windows, as well as in ms-dos. the break command is available in Windows xp and later versions of Windows to provide compatibility with ms-dos files but it has no effect in Windows itself."
	},
	{
		name : "Windows",
		learn : "cacls",
		description : "the cacls command is used to display or change access control lists of files. the cacls command is available in Windows 11, Windows 10, Windows 8, Windows 7, Windows vista, and Windows xp. the cacls command is being phased out in favor of the icacls command, which should be used instead in all versions of Windows after Windows xp."
	},
	{
		name : "Windows",
		learn : "call",
		description : "the call command is used to run a script or batch program from within another script or batch program. the call command is available in all versions of Windows, as well as in ms-dos. the call command has no effect outside of a script orÂ batch file. in other words, running the call command at the command prompt or ms-dos prompt will do nothing."
	},
	{
		name : "Windows",
		learn : "cd",
		description : "the cd command is the shorthand version of the chdir command. the cd command is available in all versions of Windows, as well as in ms-dos."
	},
	{
		name : "Windows",
		learn : "certreq",
		description : "the certreq command is used to perform various certification authority (ca) certificate functions. the certreq command is available in Windows 11, Windows 10, Windows 8, Windows 7, and Windows vista."
	},
	{
		name : "Windows",
		learn : "certutil",
		description : "the certutil command is used to dump and display certification authority (ca) configuration information in addition to other ca functions. the certutil command is available in Windows 11, Windows 10, Windows 8, Windows 7, and Windows vista."
	},
	{
		name : "Windows",
		learn : "change",
		description : "the change command changes various terminal server settings like install modes, com port mappings, and logons. the change command is available in Windows 11, Windows 10, Windows 8, Windows 7, and Windows vista."
	},
	{
		name : "Windows",
		learn : "chcp",
		description : "the chcp command displays or configures the active code page number. the chcp command is available in all versions of Windows, as well as in ms-dos."
	},
	{
		name : "Windows",
		learn : "chdir",
		description : "the chdir command is used to display the drive letter and folder that you are currently in. chdir can also be used to change the drive and/or directory that you want to work in. the chdir command is available in all versions of Windows, as well as in ms-dos."
	},
	{
		name : "Windows",
		learn : "checknetisolation",
		description : "the checknetisolation command is used to test apps that require network capabilities. the checknetisolation command is available in Windows 11, Windows 10, and Windows 8."
	},
	{
		name : "Windows",
		learn : "chglogon",
		description : "the chglogon command enables, disables, or drains terminal server session logins. the chglogon command is available in Windows 11, Windows 10, Windows 8, Windows 7, and Windows vista. executing the chglogon command is the same as executingÂ change logon."
	},
	{
		name : "Windows",
		learn : "chgport",
		description : "the chgport command can be used to display or change com port mappings for dos compatibility. the chgport command is available in Windows 11, Windows 10, Windows 8, Windows 7, and Windows vista. executing the chgport command is the same as executingÂ change port."
	},
	{
		name : "Windows",
		learn : "chgusr",
		description : "the chgusr command is used to change the install mode for the terminal server. the chgusr command is available in Windows 11, Windows 10, Windows 8, Windows 7, and Windows vista. executing the chgusr command is the same as executingÂ change user."
	},
	{
		name : "Windows",
		learn : "chkdsk",
		description : "theÂ chkdsk command, often referred to as check disk, is used to identify and correct certain hard drive errors. the chkdsk command is available in all versions of Windows, as well as in ms-dos."
	},
	{
		name : "Windows",
		learn : "chkntfs",
		description : "the chkntfs command is used to configure or display the checking of the disk drive during the Windows boot process. the chkntfs command is available in Windows 11, Windows 10, Windows 8, Windows 7, Windows vista, and Windows xp."
	},
	{
		name : "Windows",
		learn : "choice",
		description : "the choice command is used within a script or batch program to provide a list of choices and return the value of that choice to the program. the choice command is available in ms-dos and all versions of Windows except Windows xp. use the set command with the /p switch in place of the choice command in batch files and scripts that you plan to use in Windows xp."
	},
	{
		name : "Windows",
		learn : "cipher",
		description : "the cipher command shows or changes theÂ encryptionÂ status of files and folders onÂ ntfsÂ partitions. the cipher command is available in Windows 11, Windows 10, Windows 8, Windows 7, Windows vista, and Windows xp."
	},
	{
		name : "Windows",
		learn : "clip",
		description : "the clip command is used to redirect the output from any command to the clipboard in Windows. the clip command is available in Windows 11, Windows 10, Windows 8, Windows 7, and Windows vista."
	},
	{
		name : "Windows",
		learn : "cls",
		description : "the cls command clears the screen of all previously entered commands and other text. the cls command is available in all versions of Windows, as well as in ms-dos."
	},
	{
		name : "Windows",
		learn : "cmd",
		description : "the cmd command starts a new instance of the cmd.exe command interpreter. the cmd command is available in Windows 11, Windows 10, Windows 8, Windows 7, Windows vista, and Windows xp."
	},
	{
		name : "Windows",
		learn : "cmdkey",
		description : "the cmdkey command is used to show, create, and remove stored user names and passwords. the cmdkey command is available in Windows 11, Windows 10, Windows 8, Windows 7, and Windows vista."
	},
	{
		name : "Windows",
		learn : "cmstp",
		description : "the cmstp command installs or uninstalls a connection manager service profile. the cmstp command is available in Windows 11, Windows 10, Windows 8, Windows 7, Windows vista, and Windows xp."
	},
	{
		name : "Windows",
		learn : "color",
		description : "the color command is used to change the colors of the text and background within the command prompt window. the color command is available in Windows 11, Windows 10, Windows 8, Windows 7, Windows vista, and Windows xp."
	},
	{
		name : "Windows",
		learn : "command",
		description : "the command command starts a new instance of the command.com command interpreter. the command command is available in ms-dos as well as in all 32-bit versions of Windows. the command command is not available in 64-bit versions of Windows."
	},
	{
		name : "Windows",
		learn : "comp",
		description : "the comp command is used to compare the contents of two files or sets of files. the comp command is available in Windows 11, Windows 10, Windows 8, Windows 7, Windows vista, and Windows xp."
	},
	{
		name : "Windows",
		learn : "compact",
		description : "the compact command is used to show or change theÂ compressionÂ state of files and directories on ntfs partitions. the compact command is available in Windows 11, Windows 10, Windows 8, Windows 7, Windows vista, and Windows xp."
	},
	{
		name : "Windows",
		learn : "convert",
		description : "the convert command is used to convertÂ fat or fat32Â formatted volumes to the ntfs format. the convert command is available in Windows 11, Windows 10, Windows 8, Windows 7, Windows vista, and Windows xp."
	},
	{
		name : "Windows",
		learn : "copy",
		description : "theÂ copy commandÂ does simply that â€” itÂ copies one or more filesÂ from one location to another. the copy command is available in all versions of Windows, as well as in ms-dos. the xcopy command is considered to be a more \"powerful\"\" version of the copy command.\""
	},
	{
		name : "Windows",
		learn : "cscript",
		description : "the cscript command is used to execute scripts via microsoft script host. the cscript command is available in all versions of Windows. the cscript command is most popularly used to manage printers from the command line using scripts like prncnfg.vbs, prndrvr.vbs, prnmngr.vbs, and others."
	},
	{
		name : "Windows",
		learn : "ctty",
		description : "the ctty command is used to change the default input and output devices for the system. the ctty command is available in Windows 98 and 95 as well as in ms-dos. the functions provided by the ctty command were no longer necessary beginning in Windows xp because the command.com interpreter (ms-dos) is no longer the default command line interpreter."
	},
	{
		name : "Windows",
		learn : "date",
		description : "the date command is used to show or change the current date. the date command is available in all versions of Windows, as well as in ms-dos."
	},
	{
		name : "Windows",
		learn : "dblspace",
		description : "the dblspace command is used to create or configure doublespace compressed drives. the dblspace command is available in Windows 98 and 95, as well as in ms-dos. drivespace, executed using the drvspace command, is an updated version of doublespace. Windows began handling compression beginning in Windows xp."
	},
	{
		name : "Windows",
		learn : "debug",
		description : "the debug command starts debug, a command line application used to test and edit programs. the debug command is available in ms-dos as well as in all 32-bit versions of Windows. the debug command is not available in 64-bit versions of Windows."
	},
	{
		name : "Windows",
		learn : "defrag",
		description : "the defrag command is used toÂ defragmentÂ a drive you specify. the defrag command is the command line version of microsoft's disk defragmenter. the defrag command is available in all versions of Windows, as well as in ms-dos."
	},
	{
		name : "Windows",
		learn : "del",
		description : "theÂ del commandÂ is used to delete one or more files. the del command is available in all versions of Windows, as well as in ms-dos. the del command is the same as the erase command."
	},
	{
		name : "Windows",
		learn : "deltree",
		description : "the deltree command is used to delete a directory and all the files and subdirectories within it. the deltree command is available in Windows 98 and 95, as well as in ms-dos. beginning in Windows xp, a folder and its files and subfolders can be removed using the /s function of the rmdir command. deltree was no longer needed with this new rmdir ability so the command was removed."
	},
	{
		name : "Windows",
		learn : "diantz",
		description : "the diantz command is used to losslessly compress one or more files. the diantz command is sometimes called cabinet maker. the diantz command is available in Windows 7, Windows vista, and Windows xp. the diantz command is the same as the makecab command."
	},
	{
		name : "Windows",
		learn : "dir",
		description : "theÂ dir commandÂ is used to display a list of files and folders contained inside the folder that you are currently working in. the dir command also displays other important information like the hard drive'sÂ serial number, the total number of files listed, their combined size, theÂ total amount of free space left on the drive, and more. the dir command is available in all versions of Windows, as well as in ms-dos."
	},
	{
		name : "Windows",
		learn : "diskcomp",
		description : "the diskcomp command is used to compare the contents of two floppy disks. the diskcomp command is available in all versions of Windows, as well as in ms-dos, with the exclusion of Windows 11 and Windows 10."
	},
	{
		name : "Windows",
		learn : "diskcopy",
		description : "the diskcopy command is used to copy the entire contents of one floppy disk to another. the diskcopy command is available in all versions of Windows, as well as in ms-dos, with the exclusion of Windows 11 and Windows 10."
	},
	{
		name : "Windows",
		learn : "diskpart",
		description : "the diskpart command is used to create, manage, and delete hard drive partitions. the diskpart command is available in Windows 11, Windows 10, Windows 8, Windows 7, Windows vista, and Windows xp. the diskpart command replaced the fdisk command beginning in Windows xp."
	},
	{
		name : "Windows",
		learn : "diskperf",
		description : "the diskperf command is used to manage disk performance counters remotely. the diskperf command is available in Windows 11, Windows 10, Windows 8, Windows 7, Windows vista, and Windows xp."
	},
	{
		name : "Windows",
		learn : "diskraid",
		description : "the diskraid command starts the diskraid tool which is used to manage and configure raid arrays. the diskraid command is available in Windows 11, Windows 10, Windows 8, Windows 7, and Windows vista."
	},
	{
		name : "Windows",
		learn : "dism",
		description : "the dism command starts the deployment image servicing and management tool (dism). the dism tool is used to manage features in Windows images. the dism command is available in Windows 11, Windows 10, Windows 8, and Windows 7."
	},
	{
		name : "Windows",
		learn : "dispdiag",
		description : "the dispdiag command is used to output a log of information about the display system. the dispdiag command is available in Windows 11, Windows 10, Windows 8, Windows 7, and Windows vista."
	},
	{
		name : "Windows",
		learn : "djoin",
		description : "the djoin command is used to create a new computer account in a domain. the djoin command is available in Windows 11, Windows 10, Windows 8, Windows 7, and Windows vista."
	},
	{
		name : "Windows",
		learn : "doskey",
		description : "the doskey command is used to edit command lines, create macros, and recall previously entered commands. the doskey command is available in all versions of Windows, as well as in ms-dos."
	},
	{
		name : "Windows",
		learn : "dosshell",
		description : "the dosshell command starts dos shell, a graphical file management tool for ms-dos. the dosshell command is available in Windows 95 (in ms-dos mode) and also in ms-dos version 6.0 and later ms-dos versions that were upgraded from previous versions that contained the dosshell command. a graphical file manager, Windows explorer, became an integrated part of the operating system beginning in Windows 95."
	},
	{
		name : "Windows",
		learn : "dosx",
		description : "the dosx command is used to start dos protected mode interface (dpmi), a special mode designed to give ms-dos applications access to more than the normally allowed 640 kb. the dosx command is available in Windows 10, Windows 8, Windows 7, Windows vista, and Windows xp. the dosx command is not available in 64-bit versions of Windows. the dosx command and dpmi is only available in Windows to support older ms-dos programs."
	},
	{
		name : "Windows",
		learn : "driverquery",
		description : "the driverquery command is used to show a list of all installedÂ drivers. the driverquery command is available in Windows 11, Windows 10, Windows 8, Windows 7, Windows vista, and Windows xp."
	},
	{
		name : "Windows",
		learn : "drvspace",
		description : "the drvspace command is used to create or configure drivespace compressed drives. the drvspace command is available in Windows 98 and 95, as well as in ms-dos. drivespace is an updated version of doublespace, executed using the dblspace command. Windows began handling compression beginning in Windows xp."
	},
	{
		name : "Windows",
		learn : "echo",
		description : "the echo command is used to show messages, most commonly from within script or batch files. the echo command can also be used to turn the echoing feature on or off. the echo command is available in all versions of Windows, as well as in ms-dos."
	},
	{
		name : "Windows",
		learn : "edit",
		description : "the edit command starts the ms-dos editor tool which is used to create and modifyÂ text files. the edit command is available in ms-dos as well as in all 32-bit versions of Windows. the edit command is not available in 64-bit versions of Windows."
	},
	{
		name : "Windows",
		learn : "edlin",
		description : "the edlin command starts the edlin tool which is used to create and modify text files from the command line. the edlin command is available in all 32-bit versions of Windows but is not available in 64-bit versions of Windows. in ms-dos, the edlin command is only available up to ms-dos 5.0, so unless your later version of ms-dos was upgraded from 5.0 or prior, you won't see the edlin command."
	},
	{
		name : "Windows",
		learn : "emm386",
		description : "the emm386 command is used to give ms-dos access to more than 640 kb ofÂ memory (ram). the emm386 command is available in Windows 98 and 95, as well as in ms-dos. Windows itself has access to extended and expanded memory beginning in Windows 95."
	},
	{
		name : "Windows",
		learn : "endlocal",
		description : "the endlocal command is used to end the localization of environment changes inside a batch or script file. the endlocal command is available in Windows 11, Windows 10, Windows 8, Windows 7, Windows vista, and Windows xp."
	},
	{
		name : "Windows",
		learn : "erase",
		description : "the erase command is used to delete one or more files. the erase command is available in all versions of Windows, as well as in ms-dos. the erase command is the same as the del command."
	},
	{
		name : "Windows",
		learn : "esentutl",
		description : "the esentutl command is used to manage extensible storage engine databases. the esentutl command is available in Windows 11, Windows 10, Windows 8, Windows 7, Windows vista, and Windows xp."
	},
	{
		name : "Windows",
		learn : "eventcreate",
		description : "the eventcreate command is used to create a custom event in an event log. the eventcreate command is available in Windows 11, Windows 10, Windows 8, Windows 7, Windows vista, and Windows xp."
	},
	{
		name : "Windows",
		learn : "eventtriggers",
		description : "the eventtriggers command is used to configure and display event triggers. the eventtriggers command is available in Windows xp. beginning in Windows vista, event triggers are created using the attach task to this event feature in event viewer, making the eventtriggers command unnecessary."
	},
	{
		name : "Windows",
		learn : "exe2bin",
		description : "the exe2bin command is used to convert a file of theÂ exeÂ file type (executable file) to a binary file. the exe2bin command is available in 32-bit versions of Windows 10, Windows 8, Windows 7, Windows vista, and Windows xp. the exe2bin command is not available in any 64-bit version of Windows."
	},
	{
		name : "Windows",
		learn : "exit",
		description : "the exit command is used to end the cmd.exe (Windows) or command.com (ms-dos) session that you're currently working in. the exit command is available in all versions of Windows, as well as in ms-dos."
	},
	{
		name : "Windows",
		learn : "expand",
		description : "the expand command is used to extract the files and folders contained in microsoft cabinet (cab) files. the expand command is available in ms-dos as well as in all versions of Windows. the expand command is not available in the 64-bit version of Windows xp."
	},
	{
		name : "Windows",
		learn : "extrac32",
		description : "the extrac32 command is used to extract the files and folders contained in microsoft cabinet (cab) files. the extrac32 command is available in all versions of Windows. the extrac32 command is actually a cab extraction program for use by internet explorer but can be used to extract any microsoft cabinet file. use the expand command instead of the extrac32 command if possible."
	},
	{
		name : "Windows",
		learn : "extract",
		description : "the extract command is used to extract the files and folders contained in microsoft cabinet (cab) files. the extract command is available in Windows 98 and 95. the extract command was replaced by the expand command beginning in Windows xp."
	},
	{
		name : "Windows",
		learn : "fasthelp",
		description : "the fasthelp command provides more detailed information on any of the other ms-dos commands. the fasthelp command is only available in ms-dos. the help command replaced the fasthelp command beginning in Windows 95."
	},
	{
		name : "Windows",
		learn : "fastopen",
		description : "the fastopen command is used to add a program's hard drive location to a special list stored in memory, potentially improving the program's launch time by removing the need for ms-dos to locate the application on the drive. the fastopen command is available in ms-dos as well as in all 32-bit versions of Windows. the fastopen command is not available in 64-bit versions of Windows. fastopen is only available in Windows 10, Windows 8, 7, vista, and xp to support older ms-dos files."
	},
	{
		name : "Windows",
		learn : "fc",
		description : "the fc command is used to compare two individual or sets of files and then show the differences between them. the fc command is available in all versions of Windows, as well as in ms-dos."
	},
	{
		name : "Windows",
		learn : "fdisk",
		description : "the fdisk command is used to create, manage, and delete hard drive partitions. the fdisk command is available in Windows 98 and 95, as well as in ms-dos. the fdisk command was replaced by the diskpart command beginning in Windows xp. partition management is also available fromÂ disk managementÂ in Windows 11, 10, 8, 7, vista, and xp."
	},
	{
		name : "Windows",
		learn : "find",
		description : "the find command is used to search for a specified text string in one or more files. the find command is available in all versions of Windows, as well as in ms-dos."
	},
	{
		name : "Windows",
		learn : "findstr",
		description : "the findstr command is used to find text string patterns in one or more files. the findstr command is available in Windows 11, Windows 10, Windows 8, Windows 7, Windows vista, and Windows xp."
	},
	{
		name : "Windows",
		learn : "finger",
		description : "the finger command is used to return information about one or more users on a remote computer that's running the fingerÂ service. the finger command is available in Windows 11, Windows 10, Windows 8, Windows 7, Windows vista, and Windows xp."
	},
	{
		name : "Windows",
		learn : "fltmc",
		description : "the fltmc command is used to load, unload, list, and otherwise manage filter drivers. the fltmc command is available in Windows 11, Windows 10, Windows 8, Windows 7, Windows vista, and Windows xp."
	},
	{
		name : "Windows",
		learn : "fondue",
		description : "the fondue command, short for features on demand user experience tool, is used to install any of the several optional Windows features from the command line. the fondue command is available in Windows 11, Windows 10, and Windows 8. optional Windows features can also be installed from the programs and featuresÂ appletÂ inÂ control panel."
	},
	{
		name : "Windows",
		learn : "for",
		description : "the for command is used to run a specified command for each file in a set of files. the for command is most often used within a batch or script file. the for command is available in all versions of Windows, as well as in ms-dos."
	},
	{
		name : "Windows",
		learn : "forcedos",
		description : "the forcedos command is used to start the specified program in the ms-dos subsystem. the forcedos command is only available in 32-bit versions of Windows xp. the forcedos command is only used for ms-dos programs that are not recognized as such by Windows xp."
	},
	{
		name : "Windows",
		learn : "forfiles",
		description : "the forfiles command selects one or more files to execute a specified command on. the forfiles command is most often used within a batch or script file. the forfiles command is available in Windows 11, Windows 10, Windows 8, Windows 7, and Windows vista."
	},
	{
		name : "Windows",
		learn : "format",
		description : "theÂ format commandÂ is used toÂ formatÂ a drive in theÂ file systemÂ that you specify. the format command is available in all versions of Windows, as well as in ms-dos. drive formatting is also available from disk management in Windows 11, 10, 8, 7, vista, and xp."
	},
	{
		name : "Windows",
		learn : "fsutil",
		description : "the fsutil command is used to perform various fat and ntfs file system tasks like managing reparse points and sparse files, dismounting a volume, and extending a volume. the fsutil command is available in Windows 11, Windows 10, Windows 8, Windows 7, Windows vista, and Windows xp."
	},
	{
		name : "Windows",
		learn : "ftp",
		description : "the ftp command can be used to transfer files to and from another computer. the remote computer must be operating as an ftp server. the ftp command is available in all versions of Windows."
	},
	{
		name : "Windows",
		learn : "ftype",
		description : "the ftype command is used to define a default program to open a specified file type. the ftype command is available in Windows 11, Windows 10, Windows 8, Windows 7, Windows vista, and Windows xp."
	},
	{
		name : "Windows",
		learn : "getmac",
		description : "the getmac command is used to display the media access control (mac) address of all the network controllers on a system. the getmac command is available in Windows 11, Windows 10, Windows 8, Windows 7, Windows vista, and Windows xp."
	},
	{
		name : "Windows",
		learn : "goto",
		description : "the goto command is used in a batch or script file to direct the command process to a labeled line in the script. the goto command is available in all versions of Windows, as well as in ms-dos."
	},
	{
		name : "Windows",
		learn : "gpresult",
		description : "the gpresult command is used to display group policy settings. the gpresult command is available in Windows 11, Windows 10, Windows 8, Windows 7, Windows vista, and Windows xp."
	},
	{
		name : "Windows",
		learn : "gpupdate",
		description : "the gpupdate command is used to update group policy settings. the gpupdate command is available in Windows 11, Windows 10, Windows 8, Windows 7, Windows vista, and Windows xp."
	},
	{
		name : "Windows",
		learn : "graftabl",
		description : "the graftabl command is used to enable the ability of Windows to display an extended character set in graphics mode. the graftabl command is available in all versions of Windows and in ms-dos up to version 5.0. the graftabl command is not available in 64-bit versions of Windows."
	},
	{
		name : "Windows",
		learn : "graphics",
		description : "the graphics command is used to load a program that can print graphics. the graphics command is available in ms-dos as well as in all 32-bit versions of Windows. the graphics command is not available in 64-bit versions of Windows."
	},
	{
		name : "Windows",
		learn : "help",
		description : "theÂ help commandÂ provides more detailed information on any of the other command prompt or ms-dos commands. the help command is available in all versions of Windows, as well as in ms-dos."
	},
	{
		name : "Windows",
		learn : "hostname",
		description : "theÂ hostnameÂ command displays the name of the current host. the hostname command is available in Windows 11, Windows 10, Windows 8, Windows 7, Windows vista, and Windows xp."
	},
	{
		name : "Windows",
		learn : "hwrcomp",
		description : "the hwrcomp command is used to compile custom dictionaries for handwriting recognition. the hwrcomp command is available in Windows 8 and Windows 7."
	},
	{
		name : "Windows",
		learn : "hwrreg",
		description : "the hwrreg command is used to install a previously compiled custom dictionary for handwriting recognition. the hwrreg command is available in Windows 8 and Windows 7."
	},
	{
		name : "Windows",
		learn : "icacls",
		description : "the icacls command is used to display or change access control lists of files. the icacls command is available in Windows 11, Windows 10, Windows 8, Windows 7, and Windows vista. the icacls command is an updated version of the cacls command."
	},
	{
		name : "Windows",
		learn : "if",
		description : "the if command is used to perform conditional functions in a batch file. the if command is available in all versions of Windows, as well as in ms-dos."
	},
	{
		name : "Windows",
		learn : "interlnk",
		description : "the interlnk command is used to connect two computers via a serial or parallel connection to share files and printers. the interlnk command is only available in ms-dos. the ability to directly connect two computers is handled by the networking functions in all versions of Windows."
	},
	{
		name : "Windows",
		learn : "intersvr",
		description : "the intersvr command is used to start the interlnk server and to copy interlnk files from one computer to another. the intersvr command is only available in ms-dos. the ability to directly connect two computers is handled by the networking functions in all versions of Windows."
	},
	{
		name : "Windows",
		learn : "ipconfig",
		description : "the ipconfig command is used to display detailed ip information for each network adapter utilizing tcp/ip. the ipconfig command can also be used to release and renewÂ ip addressesÂ on systems configured to receive them via aÂ dhcpÂ server. the ipconfig command is available in all versions of Windows."
	},
	{
		name : "Windows",
		learn : "ipxroute",
		description : "the ipxroute command is used to display and change information about ipx routing tables. the ipxroute command is available in Windows xp. microsoft removed their built-in netWare client beginning in Windows vista, removing the associated ipxroute command as well."
	},
	{
		name : "Windows",
		learn : "irftp",
		description : "the irftp command is used to transmit files over an infrared link. the irftp command is available in Windows 8, Windows 7, and Windows vista."
	},
	{
		name : "Windows",
		learn : "iscsicli",
		description : "the iscsicli command starts the microsoft iscsi initiator, used to manage iscsi. the iscsicli command is available in Windows 11, Windows 10, Windows 8, Windows 7, and Windows vista."
	},
	{
		name : "Windows",
		learn : "kb16",
		description : "the kb16 command is used to support ms-dos files that need to configure aÂ keyboardÂ for a specific language. the kb16 command is available in Windows 10, Windows 8, Windows 7, Windows vista, and Windows xp. the kb16 command is not available in 64-bit versions of Windows. the kb16 command replaced the keyb command beginning in Windows xp but only exists to support older ms-dos files."
	},
	{
		name : "Windows",
		learn : "keyb",
		description : "the keyb command is used to configure a keyboard for a specific language. the keyb command is available in Windows 98 and 95, as well as in ms-dos. see the kb16 command for an equivalent command in later versions of Windows. keyboard language settings are handled by the region and language or regional and language options (depending on the version of Windows) control panel applets in Windows beginning in Windows xp."
	},
	{
		name : "Windows",
		learn : "klist",
		description : "the klist command is used to list kerberos service tickets. the klist command can also be used to purge kerberos tickets. the klist command is available in Windows 11, Windows 10, Windows 8 and Windows 7."
	},
	{
		name : "Windows",
		learn : "ksetup",
		description : "the ksetup command is used to configure connections to a kerberos server. the ksetup command is available in Windows 11, Windows 10, Windows 8 and Windows 7."
	},
	{
		name : "Windows",
		learn : "ktmutil",
		description : "the ktmutil command starts the kernel transaction manager utility. the ktmutil command is available in Windows 11, Windows 10, Windows 8, Windows 7, and Windows vista."
	},
	{
		name : "Windows",
		learn : "label",
		description : "the label command is used to manage the volume label of a disk. the label command is available in all versions of Windows, as well as in ms-dos."
	},
	{
		name : "Windows",
		learn : "lh",
		description : "the lh command is the shorthand version of the loadhigh command. the lh command is available in Windows 98 and 95, as well as in ms-dos."
	},
	{
		name : "Windows",
		learn : "licensingdiag",
		description : "the licensingdiag command is a tool used to generate a text-based log and other data files that containÂ product activationÂ and other Windows licensing information. the licensingdiag command is available in Windows 11, Windows 10, and Windows 8."
	},
	{
		name : "Windows",
		learn : "loadfix",
		description : "the loadfix command is used to load the specified program in the first 64k of memory and then runs the program. the loadfix command is available in ms-dos as well as in all 32-bit versions of Windows. the loadfix command is not available in 64-bit versions of Windows."
	},
	{
		name : "Windows",
		learn : "loadhigh",
		description : "the loadhigh command is used to load a program into high memory and is usually used from within the autoexec.bat file. the loadhigh command is available in Windows 98 and 95, as well as in ms-dos. memory usage is handled automatically beginning in Windows xp."
	},
	{
		name : "Windows",
		learn : "lock",
		description : "the lock command is used to lock a drive, enabling direct disk access for a program. the lock command is only available in Windows 98 and 95. drive locking is no longer available as of Windows xp."
	},
	{
		name : "Windows",
		learn : "lodctr",
		description : "the lodctr command is used to updateÂ registry valuesÂ related to performance counters. the lodctr command is available in all versions of Windows."
	},
	{
		name : "Windows",
		learn : "logman",
		description : "the logman command is used to create and manage event trace session and performance logs. the logman command also supports many functions of performance monitor. the logman command is available in Windows 11, Windows 10, Windows 8, Windows 7, Windows vista, and Windows xp."
	},
	{
		name : "Windows",
		learn : "logoff",
		description : "the logoff command is used to terminate a session. the logoff command is available in Windows 11, Windows 10, Windows 8, Windows 7, Windows vista, and Windows xp."
	},
	{
		name : "Windows",
		learn : "lpq",
		description : "the lpq command displays the status of a print queue on a computer running line printer daemon (lpd). the lpq command is available in all versions of Windows. the lpq command is not available by default in Windows 11, 10, 8, 7, or vista, but can be enabled by turning on the lpd print service and lpr port monitor features from programs and features in control panel."
	},
	{
		name : "Windows",
		learn : "lpr",
		description : "the lpr command is used to send a file to a computer running line printer daemon (lpd). the lpr command is available in all versions of Windows. the lpr command is not available by default in Windows 11, 10, 8, 7, or vista, but can be enabled by turning on the lpd print service and lpr port monitor features from programs and features in control panel."
	},
	{
		name : "Windows",
		learn : "makecab",
		description : "the makecab command is used to losslessly compress one or more files. the makecab command is sometimes called cabinet maker. the makecab command is available in Windows 11, Windows 10, Windows 8, Windows 7, Windows vista, and Windows xp. the makecab command is the same as the diantz command, a command that was removed after Windows 7."
	},
	{
		name : "Windows",
		learn : "manage-bde",
		description : "the manage-bde command is used to configure bitlocker drive encryption from the command line. the manage-bde command is available in Windows 11, Windows 10, Windows 8, and Windows 7. a script by the name of manage-bde.wsf exists in Windows vista and can be used with the cscript command to perform bitlocker tasks from the command line in that operating system."
	},
	{
		name : "Windows",
		learn : "md",
		description : "the md command is the shorthand version of the mkdir command. the md command is available in all versions of Windows, as well as in ms-dos."
	},
	{
		name : "Windows",
		learn : "mem",
		description : "the mem command shows information about used and free memory areas and programs that are currently loaded into memory in the ms-dos subsystem. the mem command is available in ms-dos as well as in all 32-bit versions of Windows. the mem command is not available in 64-bit versions of Windows."
	},
	{
		name : "Windows",
		learn : "memmaker",
		description : "the memmaker command is used to start memmaker, a memory optimization tool. the memaker command is available in Windows 98 and 95, as well as in ms-dos. memory usage is automatically optimized beginning in Windows xp."
	},
	{
		name : "Windows",
		learn : "mkdir",
		description : "the mkdir command is used to create a new folder. the mkdir command is available in all versions of Windows, as well as in ms-dos."
	},
	{
		name : "Windows",
		learn : "mklink",
		description : "the mklink command is used to create a symbolic link. the mklink command is available in Windows 11, Windows 10, Windows 8, Windows 7, and Windows vista."
	},
	{
		name : "Windows",
		learn : "mode",
		description : "the mode command is used to configure system devices, most often com and lpt ports. the mode command is available in all versions of Windows, as well as in ms-dos."
	},
	{
		name : "Windows",
		learn : "mofcomp",
		description : "the mofcomp command properly displays the data within a managed object format (mof) file. the mofcomp command is available in all versions of Windows."
	},
	{
		name : "Windows",
		learn : "more",
		description : "theÂ more commandÂ is used to display the information contained in a text file. the more command can also be used to paginate the results of any other command prompt or ms-dos command. the more command is available in all versions of Windows, as well as in ms-dos."
	},
	{
		name : "Windows",
		learn : "mount",
		description : "the mount command is used to mount network file system (nfs) network shares. the mount command is available in Windows 7 and Windows vista. the mount command is not available by default in Windows vista or Windows 7 but can be enabled by turning on the services for nfs Windows feature from programs and features in control panel. the mount command is not available in Windows 11, 10, or 8 because service for unix (sfu) was discontinued."
	},
	{
		name : "Windows",
		learn : "mountvol",
		description : "the mountvol command is used to display, create, or remove volume mount points. the mountvol command is available in Windows 11, Windows 10, Windows 8, Windows 7, Windows vista, and Windows xp."
	},
	{
		name : "Windows",
		learn : "move",
		description : "the move command is used to move one or files from one folder to another. the move command is also used to rename directories. the move command is available in all versions of Windows, as well as in ms-dos."
	},
	{
		name : "Windows",
		learn : "mrinfo",
		description : "the mrinfo command is used to provide information about aÂ router'sÂ interfaces and neighbors. the mrinfo command is available in Windows 11, Windows 10, Windows 8, Windows 7, Windows vista, and Windows xp."
	},
	{
		name : "Windows",
		learn : "msav",
		description : "the msav command starts microsoft antivirus. the msav command is only available in ms-dos. microsoft antivirus was designed for ms-dos and Windows 3.x only. microsoft provides an optional virus protection suite called microsoft security essentials for Windows xp and later operating systems, andÂ third party antivirus toolsÂ are available for all versions of Windows."
	},
	{
		name : "Windows",
		learn : "msbackup",
		description : "the msbackup command starts microsoft backup, a tool used to back up and restore one or more files. the msbackup command is only available in ms-dos. the msbackup command was replaced with microsoft backup beginning in Windows 95 and then backup and restore in later versions of Windows."
	},
	{
		name : "Windows",
		learn : "mscdex",
		description : "the mscdex command is used to provideÂ cd-romÂ access to ms-dos. the mscdex command is available in Windows 98 and 95, as well as in ms-dos. Windows provides access to cd-rom drives for the ms-dos subsystem beginning in Windows xp, so the mscdex command is unnecessary in this and later operating systems."
	},
	{
		name : "Windows",
		learn : "msd",
		description : "the msd command starts microsoft diagnostics, aÂ system information tool. the msd command is only available in ms-dos. the msd command was replaced with system information beginning in Windows 95."
	},
	{
		name : "Windows",
		learn : "msg",
		description : "theÂ msg commandÂ is used to send a message to a user. the msg command is available in Windows 11, Windows 10, Windows 8, Windows 7, Windows vista, and Windows xp."
	},
	{
		name : "Windows",
		learn : "msiexec",
		description : "the msiexec command is used to start Windows installer, a tool used to install and configure software. the msiexec command is available in Windows 11, Windows 10, Windows 8, Windows 7, Windows vista, and Windows xp."
	},
	{
		name : "Windows",
		learn : "muiunattend",
		description : "the muiunattend command starts the multilanguage user interface unattended setup process. the muiunattend command is available in Windows 11, Windows 10, Windows 8, Windows 7, and Windows vista."
	},
	{
		name : "Windows",
		learn : "nbtstat",
		description : "the nbtstat command is used to show tcp/ip information and other statistical information about a remote computer. the nbtstat command is available in all versions of Windows."
	},
	{
		name : "Windows",
		learn : "net",
		description : "theÂ net commandÂ is used to display, configure, and correct a wide variety of network settings. the net command is available in all versions of Windows."
	},
	{
		name : "Windows",
		learn : "net1",
		description : "the net1 command is used to display, configure, and correct a wide variety of network settings. the net1 command is available in Windows 11, Windows 10, Windows 8, Windows 7, Windows vista, and Windows xp. the net command should be used instead of the net1 command. the net1 command was made available in Windows nt and Windows 2000 as a temporary fix for a y2k issue that the net command had, which was corrected before the release of Windows xp. the net1 command remains in later versions of Windows only for compatibility with older programs and scripts that utilized the command."
	},
	{
		name : "Windows",
		learn : "netcfg",
		description : "the netcfg command is used to install the Windows preinstallation environment (Winpe), a lightweight version of Windows used to deploy workstations. the netcfg command is available in Windows 11, Windows 10, Windows 8, Windows 7, and Windows vista."
	},
	{
		name : "Windows",
		learn : "netsh",
		description : "the netsh command is used to start network shell, a command-line utility used to manage the network configuration of the local, or a remote, computer. the netsh command is available in Windows 11, Windows 10, Windows 8, Windows 7, Windows vista, and Windows xp."
	},
	{
		name : "Windows",
		learn : "netstat",
		description : "theÂ netstat commandÂ is most commonly used to display all open network connections and listening ports. the netstat command is available in all versions of Windows."
	},
	{
		name : "Windows",
		learn : "nfsadmin",
		description : "the nfsadmin command is used to manage server for nfs or client for nfs from the command line. the nfsadmin command is available in Windows 7 and Windows vista. the nfsadmin command is not available by default in Windows vista or Windows 7 but can be enabled by turning on the services for nfs Windows feature from programs and features in control panel. the nfsadmin command is not available in Windows 11, 10, or 8 because service for unix (sfu) was discontinued."
	},
	{
		name : "Windows",
		learn : "nlsfunc",
		description : "the nlsfunc command is used to load information specific to a particular country or region. the nlsfunc command is available in ms-dos as well as in all 32-bit versions of Windows. the nlsfunc command is not available in 64-bit versions of Windows. nlsfunc is only available in Windows 10, 8, 7, vista, and xp to support older ms-dos files."
	},
	{
		name : "Windows",
		learn : "nltest",
		description : "the nltest command is used to test secure channels between Windows computers in a domain and between domain controllers that are trusting other domains. the nltest command is available in Windows 11, Windows 10, Windows 8, and Windows 7."
	},
	{
		name : "Windows",
		learn : "nslookup",
		description : "the nslookup is most commonly used to display the hostname of an entered ip address. the nslookup command queries your configuredÂ dns serverÂ to discover the ip address. the nslookup command is available in Windows 11, Windows 10, Windows 8, Windows 7, Windows vista, and Windows xp."
	},
	{
		name : "Windows",
		learn : "ntbackup",
		description : "the ntbackup command is used to perform various backup functions from the command prompt or from within a batch or script file. the ntbackup command is available in Windows xp. the ntbackup command was replaced with the wbadmin beginning in Windows vista."
	},
	{
		name : "Windows",
		learn : "ntsd",
		description : "the ntsd command is used to perform certain command line debugging tasks. the ntsd command is available in Windows xp. the ntsd command was removed beginning in Windows vista due to the addition of dump file support inÂ task manager."
	},
	{
		name : "Windows",
		learn : "ocsetup",
		description : "the ocsetup command starts the Windows optional component setup tool, used to install additional Windows features. the ocsetup command is available in Windows 8, Windows 7, and Windows vista. beginning in Windows 8, microsoft is depreciating the ocsetup command in favor of the dism command."
	},
	{
		name : "Windows",
		learn : "openfiles",
		description : "the openfiles command is used to display and disconnect open files and folders on a system. the openfiles command is available in Windows 11, Windows 10, Windows 8, Windows 7, Windows vista, and Windows xp."
	},
	{
		name : "Windows",
		learn : "path",
		description : "the path command is used to display or set a specific path available to executable files. the path command is available in all versions of Windows, as well as in ms-dos."
	},
	{
		name : "Windows",
		learn : "pathping",
		description : "the pathping command functions much like the tracert command but will also report information about network latency and loss at eachÂ hop. the pathping command is available in Windows 11, Windows 10, Windows 8, Windows 7, Windows vista, and Windows xp."
	},
	{
		name : "Windows",
		learn : "pause",
		description : "the pause command is used within a batch or script file to pause the processing of the file. When the pause command is used, a \"press any key to continueâ€¦\"\" message displays in the command window. the pause command is available in all versions of Windows"
	},
	{
		name : "Windows",
		learn : "pentnt",
		description : "the pentnt command is used to detect floating point division errors in the intel pentium chip. the pentnt command is also used to enable floating point emulation and disable floating pointÂ hardware. the pentnt command is available in Windows xp. the pentnt command was removed beginning in Windows vista due to the lack of intel pentiumÂ cpuÂ use at the time of this operating system release."
	},
	{
		name : "Windows",
		learn : "ping",
		description : "theÂ ping commandÂ sends an internet control message protocol (icmp) echo request message to a specified remote computer to verify ip-level connectivity. the ping command is available in all versions of Windows."
	},
	{
		name : "Windows",
		learn : "pkgmgr",
		description : "the pkgmgr command is used to start the Windows package manager from the command prompt. package manager installs, uninstalls, configures, and updates features and packages for Windows. the pkgmgr command is available in Windows 11, Windows 10, Windows 8, Windows 7, and Windows vista."
	},
	{
		name : "Windows",
		learn : "pnpunattend",
		description : "the pnpunattend command is used to automate the installation of hardware device drivers. the pnpunattend command is available in Windows 11, Windows 10, Windows 8, Windows 7, and Windows vista."
	},
	{
		name : "Windows",
		learn : "pnputil",
		description : "the pnputil command is used to start the microsoft pnp utility, a tool used to install a plug and play device from the command line. the pnputil command is available in Windows 11, Windows 10, Windows 8, Windows 7, and Windows vista."
	},
	{
		name : "Windows",
		learn : "popd",
		description : "the popd command is used to change the current directory to the one most recently stored by the pushd command. the popd command is most often utilized from within a batch or script file. the popd command is available in Windows 11, Windows 10, Windows 8, Windows 7, Windows vista, and Windows xp."
	},
	{
		name : "Windows",
		learn : "power",
		description : "the power command is used to reduce the power consumed by a computer by monitoring software and hardware devices. the power command is available in Windows 98 and 95, as well as in ms-dos. the power command was replaced by operating system integrated power management functions beginning in Windows xp."
	},
	{
		name : "Windows",
		learn : "powercfg",
		description : "the powercfg command is used to manage the Windows power management settings from the command line. the powercfg command is available in Windows 11, Windows 10, Windows 8, Windows 7, Windows vista, and Windows xp."
	},
	{
		name : "Windows",
		learn : "print",
		description : "the print command is used to print a specified text file to a specified printing device. the print command is available in all versions of Windows, as well as in ms-dos."
	},
	{
		name : "Windows",
		learn : "prompt",
		description : "the prompt command is used to customize the appearance of the prompt text in command prompt or ms-dos. the prompt command is available in all versions of Windows, as well as in ms-dos."
	},
	{
		name : "Windows",
		learn : "pushd",
		description : "the pushd command is used to store a directory for use, most commonly from within a batch or script program. the pushd command is available in Windows 11, Windows 10, Windows 8, Windows 7, Windows vista, and Windows xp."
	},
	{
		name : "Windows",
		learn : "pwlauncher",
		description : "the pwlauncher command is used to enable, disable, or show the status of your Windows to go startup options. the pwlauncher command is available in Windows 11, 10, and 8."
	},
	{
		name : "Windows",
		learn : "qappsrv",
		description : "the qappsrv command is used to display all remote desktop session host servers available on the network. the qappsrv command is available in Windows 11, Windows 10, Windows 8, Windows 7, Windows vista, and Windows xp."
	},
	{
		name : "Windows",
		learn : "qbasic",
		description : "the qbasic command starts qbasic, the ms-dos based programming environment for the basic programming language. the qbasic command is available in Windows 98 and 95, as well as in ms-dos. the qbasic command is not installed by default with Windows 98 or 95 but is available from the installation disc or disks."
	},
	{
		name : "Windows",
		learn : "qprocess",
		description : "the qprocess command is used to display information about running processes. the qprocess command is available in Windows 11, Windows 10, Windows 8, Windows 7, Windows vista, and Windows xp."
	},
	{
		name : "Windows",
		learn : "query",
		description : "the query command is used to display the status of a specified service. the query command is available in Windows 11, Windows 10, Windows 8, Windows 7, and Windows vista."
	},
	{
		name : "Windows",
		learn : "quser",
		description : "the quser command is used to display information about users currently logged on to the system. the quser command is available in Windows 11, Windows 10, Windows 8, Windows 7, and Windows vista."
	},
	{
		name : "Windows",
		learn : "qwinsta",
		description : "the qwinsta command is used to display information about open remote desktop sessions. the qwinsta command is available in Windows 11, Windows 10, Windows 8, Windows 7, Windows vista, and Windows xp."
	},
	{
		name : "Windows",
		learn : "rasautou",
		description : "the rasautou command is used to manage remote access dialer autodial addresses. the rasautou command is available in Windows 11, Windows 10, Windows 8, Windows 7, Windows vista, and Windows xp."
	},
	{
		name : "Windows",
		learn : "rasdial",
		description : "the rasdial command is used to start or end a network connection for a microsoft client. the rasdial command is available in Windows 11, Windows 10, Windows 8, Windows 7, Windows vista, and Windows xp."
	},
	{
		name : "Windows",
		learn : "rcp",
		description : "the rcp command is used to copy files between a Windows computer and a system running the rshd daemon. the rcp command is available in Windows 7, Windows vista, and Windows xp. the rcp command is not available by default in Windows vista or Windows 7 but can be enabled by turning on the subsystem for unix-based applications Windows feature from programs and features in control panel and then installing the utilities and sdk for unix-based applications available here for Windows vista and here for Windows 7. the rcp command is not available in Windows 11, 10, or 8 because service for unix (sfu) was discontinued."
	},
	{
		name : "Windows",
		learn : "rd",
		description : "the rd command is the shorthand version of the rmdir command. the rd command is available in all versions of Windows, as well as in ms-dos."
	},
	{
		name : "Windows",
		learn : "rdpsign",
		description : "the rdpsign command is used to sign a remote desktop protocol (rdp) file. the rdpsign command is available in Windows 7."
	},
	{
		name : "Windows",
		learn : "reagentc",
		description : "the reagentc command is used to configure the Windows recovery environment (re). the reagentc command is available in Windows 11, Windows 10, Windows 8, and Windows 7."
	},
	{
		name : "Windows",
		learn : "recimg",
		description : "the recimg command is used to create a custom refresh image. the recimg command is available in Windows 8."
	},
	{
		name : "Windows",
		learn : "recover",
		description : "the recover command is used to recover readable data from a bad or defective disk. the recover command is available in Windows 11, Windows 10, Windows 8, Windows 7, Windows vista, and Windows xp."
	},
	{
		name : "Windows",
		learn : "reg",
		description : "the reg command is used to manage theÂ Windows registryÂ from the command line. the reg command can perform common registry functions like addingÂ registry keys,Â exporting the registry, etc. the reg command is available in Windows 11, Windows 10,Â Windows 8, Windows 7, Windows vista, and Windows xp."
	},
	{
		name : "Windows",
		learn : "regini",
		description : "the regini command is used to set or change registry permissions and registry values from the command line. the regini command is available in Windows 11, Windows 10,Â Windows 8, Windows 7, Windows vista, and Windows xp."
	},
	{
		name : "Windows",
		learn : "register-cimprovider",
		description : "the register-cimprovider command is used to register a common information model (cim) provider in Windows. the register-cimprovider command is available in Windows 11, Windows 10, and Windows 8."
	},
	{
		name : "Windows",
		learn : "regsvr32",
		description : "the regsvr32 command is used toÂ register a dll fileÂ as a command component in the Windows registry. the regsvr32 command is available in Windows 11, Windows 10,Â Windows 8, Windows 7, Windows vista, and Windows xp."
	},
	{
		name : "Windows",
		learn : "relog",
		description : "the relog command is used to create new performance logs from data in existing performance logs. the relog command is available in Windows 11, Windows 10,Â Windows 8, Windows 7, Windows vista, and Windows xp."
	},
	{
		name : "Windows",
		learn : "rem",
		description : "the rem command is used to record comments or remarks in a batch or script file. the rem command is available in all versions of Windows, as well as in ms-dos."
	},
	{
		name : "Windows",
		learn : "ren",
		description : "theÂ ren commandÂ is the shorthand version of the rename command. the ren command is available in all versions of Windows, as well as in ms-dos."
	},
	{
		name : "Windows",
		learn : "rename",
		description : "the rename command is used to change the name of the individual file that you specify. the rename command is available in all versions of Windows, as well as in ms-dos."
	},
	{
		name : "Windows",
		learn : "repair-bde",
		description : "the repair-bde command is used to repair or decrypt a damaged drive that's been encrypted using bitlocker. the repair-bde command is available in Windows 11, Windows 10,Â Windows 8, and Windows 7."
	},
	{
		name : "Windows",
		learn : "replace",
		description : "the replace command is used to replace one or more files with one or more other files. the replace command is available in all versions of Windows, as well as in ms-dos."
	},
	{
		name : "Windows",
		learn : "reset",
		description : "the reset command, executed asÂ reset session, is used to reset the session subsystem software and hardware to known initial values. the reset command is available in Windows 11, Windows 10,Â Windows 8, Windows 7, Windows vista, and Windows xp."
	},
	{
		name : "Windows",
		learn : "restore",
		description : "the restore command is used to restore files that were backed up using the backup command. the restore command is only available in ms-dos. the backup command was only available up to ms-dos 5.00 but the restore command was included by default with later versions of ms-dos to provide a way to restore files that were backed up in previous versions of ms-dos."
	},
	{
		name : "Windows",
		learn : "rexec",
		description : "the rexec command is used to run commands on remote computers running the rexec daemon. the rexec command is available in Windows vista and Windows xp. the rsh command is not available by default in Windows vista but can be enabled by turning on the subsystem for unix-based applications Windows feature from programs and features in control panel and then installing the utilities and sdk for unix-based applications available here. the rexec command is not available in Windows 7 but can be executed in Windows xp via Windows xp mode if need be."
	},
	{
		name : "Windows",
		learn : "rmdir",
		description : "the rmdir command is used to delete an existing or completely empty folder. the rmdir command is available in all versions of Windows, as well as in ms-dos."
	},
	{
		name : "Windows",
		learn : "robocopy",
		description : "the robocopy command is used to copy files and directories from one location to another. this command is also called robust file copy. the robocopy command is available in Windows 11, Windows 10,Â Windows 8, Windows 7, and Windows vista. the robocopy command is superior to both the copy command and the xcopy command because robocopy supports many more options."
	},
	{
		name : "Windows",
		learn : "route",
		description : "the route command is used to manipulate network routing tables. the route command is available in all versions of Windows."
	},
	{
		name : "Windows",
		learn : "rpcinfo",
		description : "the rpcinfo command makes a remote procedure call (rpc) to an rpc server and reports what it finds. the rpcinfo command is available in Windows 7 and Windows vista. the rpcinfo command is not available by default in Windows vista or Windows 7 but can be enabled by turning on the services for nfs Windows feature from programs and features in control panel. the rpcinfo command is not available in Windows 11, 10, or 8 because service for unix (sfu) was discontinued."
	},
	{
		name : "Windows",
		learn : "rpcping",
		description : "the rpcping command is used to ping a server using rpc. the rpcping command is available in Windows 11, Windows 10,Â Windows 8, Windows 7, and Windows vista."
	},
	{
		name : "Windows",
		learn : "rsh",
		description : "the rsh command is used to run commands on remote computers running the rsh daemon. the rsh command is available in Windows 7, Windows vista, and Windows xp. the rsh command is not available by default in Windows vista or Windows 7 but can be enabled by turning on the subsystem for unix-based applications Windows feature from programs and features in control panel and then installing the utilities and sdk for unix-based applications available here for Windows vista and here for Windows 7. the rsh command is not available in Windows 11, 10, or 8 because service for unix (sfu) was discontinued."
	},
	{
		name : "Windows",
		learn : "rsm",
		description : "the rsm command is used to manage media resources using removable storage. the rsm command is available in Windows vista and Windows xp. the rsm command was optional in Windows vista and then removed in Windows 7 due to removable storage manager being removed from the operating system. search for the rsm command in the c:\\Windows\\winsxs folder in Windows vista if you're having trouble executing the command."
	},
	{
		name : "Windows",
		learn : "runas",
		description : "the runas command is used to execute a program using another user's credentials. the runas command is available in Windows 11, Windows 10,Â Windows 8, Windows 7, Windows vista, and Windows xp."
	},
	{
		name : "Windows",
		learn : "rwinsta",
		description : "the rwinsta command is the shorthand version of the reset session command. the rwinsta command is available in Windows 11, Windows 10,Â Windows 8, Windows 7, Windows vista, and Windows xp."
	},
	{
		name : "Windows",
		learn : "sc",
		description : "the sc command is used to configure information about services. the sc command communicates with the service control manager. the sc command is available in Windows 11, Windows 10,Â Windows 8, Windows 7, Windows vista, and Windows xp."
	},
	{
		name : "Windows",
		learn : "scandisk",
		description : "the scandisk command is used to start microsoft scandisk, a disk repair program. the scandisk command is available in Windows 98 and 95, as well as in ms-dos. the scandisk command was replaced by the chkdsk command beginning in Windows xp."
	},
	{
		name : "Windows",
		learn : "scanreg",
		description : "the scanreg command starts Windows registry checker, a basic registry repair program and backup utility. the scanreg command is available in Windows 98 and Windows 95. the functions provided by the scanreg command were no longer necessary beginning in Windows xp due to changes in how the Windows registry functions."
	},
	{
		name : "Windows",
		learn : "schtasks",
		description : "the schtasks command is used to schedule specified programs or commands to run at certain times. the schtasks command can be used to create, delete, query, change, run, and end scheduled tasks. the schtasks command is available in Windows 11, Windows 10,Â Windows 8, Windows 7, Windows vista, and Windows xp.â€‹"
	},
	{
		name : "Windows",
		learn : "sdbinst",
		description : "the sdbinst command is used to deploy customized sdb database files. the sdbinst command is available in Windows 11, Windows 10,Â Windows 8, Windows 7, Windows vista, and Windows xp."
	},
	{
		name : "Windows",
		learn : "secedit",
		description : "the secedit command is used to configure and analyze system security by comparing the current security configuration to a template. the secedit command is available in Windows 11, Windows 10,Â Windows 8, Windows 7, Windows vista, and Windows xp."
	},
	{
		name : "Windows",
		learn : "set",
		description : "the set command is used to display, enable, or disableÂ environment variablesÂ in ms-dos or from the command prompt. the set command is available in all versions of Windows, as well as in ms-dos."
	},
	{
		name : "Windows",
		learn : "setlocal",
		description : "the setlocal command is used to start the localization of environment changes inside a batch or script file. the setlocal command is available in Windows 11, Windows 10,Â Windows 8, Windows 7, Windows vista, and Windows xp."
	},
	{
		name : "Windows",
		learn : "setspn",
		description : "the setspn command is used to manage the service principal names (spn) for an active directory (ad) service account. the setspn command is available in Windows 11, Windows 10,Â Windows 8, and Windows 7."
	},
	{
		name : "Windows",
		learn : "setver",
		description : "the setver command is used to set the ms-dos version number that ms-dos reports to a program. the setver command is available in ms-dos as well as in all 32-bit versions of Windows. the setver command is not available in 64-bit versions of Windows."
	},
	{
		name : "Windows",
		learn : "setx",
		description : "the setx command is used to create or change environment variables in the user environment or the system environment. the setx command is available in Windows 11, Windows 10,Â Windows 8, Windows 7, and Windows vista."
	},
	{
		name : "Windows",
		learn : "sfc",
		description : "theÂ sfc commandÂ is used toÂ verify and replace important Windows system files. the sfc command is also referred to as system file checker or Windows resource checker, depending on the operating system. the sfc command is available in Windows 11, Windows 10,Â Windows 8, Windows 7, Windows vista, and Windows xp."
	},
	{
		name : "Windows",
		learn : "shadow",
		description : "the shadow command is used to monitor another remote desktop services session. the shadow command is available in Windows 7, Windows vista, and Windows xp."
	},
	{
		name : "Windows",
		learn : "share",
		description : "the share command is used to install file locking and file sharing functions in ms-dos. the share command is available in ms-dos as well as in all 32-bit versions of Windows. the share command is not available in 64-bit versions of Windows. share is only available in Windows 10, 8, 7, vista, and xp to support older ms-dos files."
	},
	{
		name : "Windows",
		learn : "shift",
		description : "the shift command is used to change the position of replaceable parameters in a batch or script file. the shift command is available in all versions of Windows, as well as in ms-dos."
	},
	{
		name : "Windows",
		learn : "showmount",
		description : "the showmount command is used to display information about nfs mounted file systems. the showmount command is available in Windows 7 and Windows vista. the showmount command is not available by default in Windows vista or Windows 7 but can be enabled by turning on the services for nfs Windows feature from programs and features in control panel. the showmount command is not available in Windows 11, 10, or 8 because service for unix (sfu) was discontinued."
	},
	{
		name : "Windows",
		learn : "shutdown",
		description : "theÂ shutdown commandÂ can be used to shut down,Â restart, or log off the current system or a remote computer. the shutdown command is available in Windows 11, Windows 10,Â Windows 8, Windows 7, Windows vista, and Windows xp."
	},
	{
		name : "Windows",
		learn : "smartdrv",
		description : "the smartdrv command installs and configures smartdrive, a disk caching utility for ms-dos. the smartdrv command is available in Windows 98 and 95, as well as in ms-dos. caching is automatic beginning in Windows xp, making the smartdrv command unnecessary."
	},
	{
		name : "Windows",
		learn : "sort",
		description : "the sort command is used to read data from a specified input, sort that data, and return the results of that sort to the command prompt screen, a file, or another output device. the sort command is available in all versions of Windows, as well as in ms-dos."
	},
	{
		name : "Windows",
		learn : "start",
		description : "the start command is used to open a new command line window to run a specified program or command. the start command can also be used to start an application without creating a new window. the start command is available in all versions of Windows."
	},
	{
		name : "Windows",
		learn : "subst",
		description : "the subst command is used to associate a local path with a drive letter. the subst command is a lot like the net use command except a local path is used instead of a shared network path. the subst command is available in all versions of Windows, as well as in ms-dos. the subst command replaced the assign command beginning with ms-dos 6.0."
	},
	{
		name : "Windows",
		learn : "sxstrace",
		description : "the sxstrace command is used to start the Winsxs tracing utility, a programming diagnostic tool. the sxstrace command is available in Windows 11, Windows 10,Â Windows 8, Windows 7, and Windows vista."
	},
	{
		name : "Windows",
		learn : "sys",
		description : "the sys command is used to copy the ms-dos system files and command interpreter to a disk. the sys command is available in Windows 98 and 95, as well as in ms-dos. the sys command is used most often to create a simple bootable disk or hard drive. the necessary system files for Windows are too large to fit on a disk, so the sys command was removed beginning in Windows xp."
	},
	{
		name : "Windows",
		learn : "systeminfo",
		description : "the systeminfo command is used to display basic Windows configuration information for the local or a remote computer. the systeminfo command is available in Windows 11, Windows 10,Â Windows 8, Windows 7, Windows vista, and Windows xp."
	},
	{
		name : "Windows",
		learn : "takeown",
		description : "the takedown command is used to regain access to a file that that an administrator was denied access to when reassigning ownership of the file. the takeown command is available in Windows 11, Windows 10,Â Windows 8, Windows 7, and Windows vista."
	},
	{
		name : "Windows",
		learn : "taskkill",
		description : "the taskkill command is used to terminate a running task. the taskkill command is the command line equivalent ofÂ ending a process in task managerÂ in Windows. the taskkill command is available in Windows 11, Windows 10,Â Windows 8, Windows 7, Windows vista, and Windows xp."
	},
	{
		name : "Windows",
		learn : "tasklist",
		description : "displays a list of applications, services, and the process id (pid) currently running on either a local or a remote computer. the tasklist command is available in Windows 11, Windows 10,Â Windows 8, Windows 7, Windows vista, and Windows xp."
	},
	{
		name : "Windows",
		learn : "tcmsetup",
		description : "the tcmsetup command is used to set up or disable the telephony application programming interface (tapi) client. the tcmsetup command is available in Windows 11, Windows 10,Â Windows 8, Windows 7, Windows vista, and Windows xp."
	},
	{
		name : "Windows",
		learn : "telnet",
		description : "the telnet command is used to communicate with remote computers that use theÂ telnet protocol. the telnet command is available in all versions of Windows. the telnet command is not available by default in Windows 11, 10, 8, 7, or vista, but can be enabled by turning on the telnet client Windows feature from programs and features in control panel."
	},
	{
		name : "Windows",
		learn : "tftp",
		description : "the tftp command is used to transfer files to and from a remote computer that's running the trivial file transfer protocol (tftp) service or daemon. the tftp command is available in Windows 11, Windows 10,Â Windows 8, Windows 7, Windows vista, and Windows xp. the tftp command is not available by default in some versions of Windows, but can be enabled by turning on the tftp client Windows feature from programs and features in control panel."
	},
	{
		name : "Windows",
		learn : "time",
		description : "the time command is used to show or change the current time. the time command is available in all versions of Windows, as well as in ms-dos."
	},
	{
		name : "Windows",
		learn : "timeout",
		description : "the timeout command is typically used in a batch or script file to provide a specified timeout value during a procedure. the timeout command can also be used to ignore keypresses. the timeout command is available in Windows 11, Windows 10,Â Windows 8, Windows 7, and Windows vista."
	},
	{
		name : "Windows",
		learn : "title",
		description : "the title command is used to set the command prompt window title. the title command is available in Windows 11, Windows 10,Â Windows 8, Windows 7, Windows vista, and Windows xp."
	},
	{
		name : "Windows",
		learn : "tlntadmn",
		description : "the tlntadmn command is used to administer a local or remote computer running telnet server. the tlntadmn command is available in Windows 11, Windows 10,Â Windows 8, Windows 7, Windows vista, and Windows xp. the tlntadmn command is not available by default in some versions of Windows, but can be enabled by turning on the telnet server Windows feature from programs and features in control panel."
	},
	{
		name : "Windows",
		learn : "tpmvscmgr",
		description : "the tpmvscmgr command is used to create and destroy tpm virtual smart cards. the tpmvscmgr command is available in Windows 11, Windows 10, and Windows 8."
	},
	{
		name : "Windows",
		learn : "tracerpt",
		description : "the tracerpt command is used to process event trace logs or real-time data from instrumented event trace providers. the tracerpt command is available in Windows 11, Windows 10,Â Windows 8, Windows 7, Windows vista, and Windows xp."
	},
	{
		name : "Windows",
		learn : "tracert",
		description : "theÂ tracert commandÂ sends internet control message protocol (icmp) echo request messages to a specified remote computer with increasing time to live (ttl) field values and displays the ip address and hostname, if available, of the router interfaces between the source and destination. the tracert command is available in all versions of Windows."
	},
	{
		name : "Windows",
		learn : "tree",
		description : "the tree command is used to graphically display the folder structure of a specified drive or path. the tree command is available in all versions of Windows, as well as in ms-dos."
	},
	{
		name : "Windows",
		learn : "tscon",
		description : "the tscon command is used to attach a user session to a remote desktop session. the tscon command is available in Windows 11, Windows 10,Â Windows 8, Windows 7, Windows vista, and Windows xp."
	},
	{
		name : "Windows",
		learn : "tsdiscon",
		description : "the tsdiscon command is used to disconnect a remote desktop session. the tsdiscon command is available in Windows 11, Windows 10,Â Windows 8, Windows 7, Windows vista, and Windows xp."
	},
	{
		name : "Windows",
		learn : "tskill",
		description : "the tskill command is used to end the specified process. the tskill command is available in Windows 11, Windows 10,Â Windows 8, Windows 7, Windows vista, and Windows xp."
	},
	{
		name : "Windows",
		learn : "tsshutdn",
		description : "the tsshutdn command is used to remotely shut down or restart a terminal server. the tsshutdn command is available in Windows xp. the ability to shut down a computer remotely is also available in the more powerful shutdown command, so tsshutdn was removed beginning in Windows vista."
	},
	{
		name : "Windows",
		learn : "type",
		description : "the type command is used to display the information contained in a text file. the type command is available in all versions of Windows, as well as in ms-dos."
	},
	{
		name : "Windows",
		learn : "typeperf",
		description : "the typerperf command displays performance data in the command prompt window or writes the data to specified log file. the typeperf command is available in Windows 11, Windows 10,Â Windows 8, Windows 7, Windows vista, and Windows xp."
	},
	{
		name : "Windows",
		learn : "tzutil",
		description : "the tzutil command is used to display or configure the current system's time zone. the tzutil command can also be used to enable or disable daylight saving time adjustments. the tzutil command is available in Windows 11, Windows 10, Windows 8, and Windows 7."
	},
	{
		name : "Windows",
		learn : "umount",
		description : "the umount command is used to remove network file system (nfs) mounted network shares. the umount command is available in Windows 7 and Windows vista. the umount command is not available by default in Windows vista or Windows 7 but can be enabled by turning on the services for nfs Windows feature from programs and features in control panel. the umount command is not available in Windows 11, 10, or 8 because service for unix (sfu) was discontinued."
	},
	{
		name : "Windows",
		learn : "undelete",
		description : "the undelete command is used to undo a deletion performed with the ms-dos delete command. the undelete command is only available in ms-dos. the undelete command was removed beginning in Windows 95 due to the availability of the recycle bin in Windows. additionally,Â free file recovery programsÂ are available from third-party software makers."
	},
	{
		name : "Windows",
		learn : "unformat",
		description : "the unformat command is used to undo the formatting on a drive performed by the ms-dos format command. the unformat command is only available in ms-dos. the unformat command was removed beginning in Windows 95 due to file system changes."
	},
	{
		name : "Windows",
		learn : "unlock",
		description : "the unlock command is used to unlock a drive, disabling direct disk access for a program. the unlock command is only available in Windows 98 and 95. drive locking is no longer available as of Windows xp."
	},
	{
		name : "Windows",
		learn : "unlodctr",
		description : "the unlodctr command removes explain text and performance counter names for a service or device driver from the Windows registry. the unlodctr command is available in Windows 11, Windows 10,Â Windows 8, Windows 7, Windows vista, and Windows xp."
	},
	{
		name : "Windows",
		learn : "vaultcmd",
		description : "the vaultcmd command is used to create, remove, and show stored credentials. the vaultcmd command is available in Windows 11, Windows 10,Â Windows 8, and Windows 7."
	},
	{
		name : "Windows",
		learn : "ver",
		description : "the ver command is used to display the current Windows or ms-dosÂ version number. the ver command is available in all versions of Windows, as well as in ms-dos."
	},
	{
		name : "Windows",
		learn : "verify",
		description : "the verify command is used to enable or disable the ability of command prompt, or ms-dos, to verify that files are written correctly to a disk. the verify command is available in all versions of Windows, as well as in ms-dos."
	},
	{
		name : "Windows",
		learn : "vol",
		description : "the vol command shows theÂ volume labelÂ and serial number of a specified disk, assuming this information exists. the vol command is available in all versions of Windows, as well as in ms-dos."
	},
	{
		name : "Windows",
		learn : "vsafe",
		description : "the vsafe command is used to start vsafe, a basic virus protection system for ms-dos. the vsafe command is only available in ms-dos. vsafe was designed for ms-dos and Windows 3.x only. microsoft provides an optional virus protection suite called microsoft security essentials for Windows xp and later operating systems, and third-party antivirus tools are available for all versions of Windows."
	},
	{
		name : "Windows",
		learn : "vssadmin",
		description : "the vssadmin command starts the volume shadow copy service administrative command line tool which displays current volume shadow copy backups and all installed shadow copy writers and providers. the vssadmin command is available in Windows 11, Windows 10,Â Windows 8, Windows 7, Windows vista, and Windows xp."
	},
	{
		name : "Windows",
		learn : "W32tm",
		description : "the w32tm command is used to diagnose issues with Windows time. the w32tm command is available in Windows 11, Windows 10,Â Windows 8, Windows 7, Windows vista, and Windows xp."
	},
	{
		name : "Windows",
		learn : "Waitfor",
		description : "the waitfor command is used to send or wait for a signal on a system. the waitfor command is available in Windows 11, Windows 10,Â Windows 8, Windows 7, and Windows vista."
	},
	{
		name : "Windows",
		learn : "Wbadmin",
		description : "the wbadmin command is used to start and stop backup jobs, display details about a previous backup, list the items within a backup, and report on the status of a currently running backup. the wbadmin command is available in Windows 11, Windows 10,Â Windows 8, Windows 7, and Windows vista. the wbadmin command replaced the ntbackup command beginning in Windows vista."
	},
	{
		name : "Windows",
		learn : "Wecutil",
		description : "the wecutil command is used to manage subscriptions to events that are forwarded from Ws-management supported computers. the wecutil command is available in Windows 11, Windows 10,Â Windows 8, Windows 7, and Windows vista."
	},
	{
		name : "Windows",
		learn : "Wevtutil",
		description : "the wevtutil command starts the Windows events command line utility which is used to manage event logs and publishers. the wevtutil command is available in Windows 11, Windows 10,Â Windows 8, Windows 7, and Windows vista."
	},
	{
		name : "Windows",
		learn : "Where",
		description : "the where command is used to search for files that match a specified pattern. the where command is available in Windows 11, Windows 10,Â Windows 8, Windows 7, and Windows vista."
	},
	{
		name : "Windows",
		learn : "Whoami",
		description : "the whoami command is used to retrieve user name and group information on a network. the whoami command is available in Windows 11, Windows 10,Â Windows 8, Windows 7, and Windows vista."
	},
	{
		name : "Windows",
		learn : "Winmgmt",
		description : "the winmgmt command starts the command line version of Wmi, a scripting tool in Windows. the winmgmt command is available in all versions of Windows."
	},
	{
		name : "Windows",
		learn : "Winrm",
		description : "the winrm command is used to start the command line version of Windows remote management, used to manage secure communications with local and remote computers using web services. the winrm command is available in Windows 11, Windows 10,Â Windows 8, Windows 7, and Windows vista."
	},
	{
		name : "Windows",
		learn : "Winrs",
		description : "the winrs command is used to open a secure command window with a remote host. the winrs command is available in Windows 11, Windows 10,Â Windows 8, Windows 7, and Windows vista."
	},
	{
		name : "Windows",
		learn : "Winsat",
		description : "the winsat command starts the Windows system assessment tool, a program that assesses various features, attributes, and capabilities of a computer running Windows. the winsat command is available in Windows 11, Windows 10,Â Windows 8, Windows 7, and Windows vista."
	},
	{
		name : "Windows",
		learn : "Wmic",
		description : "the wmic command starts the Windows management instrumentation command line (Wmic), a scripting interface that simplifies the use of Windows management instrumentation (Wmi) and systems managed via Wmi. the wmic command is available in Windows 11, Windows 10,Â Windows 8, Windows 7, Windows vista, and Windows xp."
	},
	{
		name : "Windows",
		learn : "Wsmanhttpconfig",
		description : "the wsmanhttpconfig command is used to manage aspects of the Windows remote management (Winrm) service. the wsmanhttpconfig command is available in Windows 11, Windows 10,Â Windows 8, Windows 7, and Windows vista."
	},
	{
		name : "Windows",
		learn : "xcopy",
		description : "theÂ xcopy commandÂ can copy one or more files or directory trees from one location to another. the xcopy command is generally considered a more \"powerful\"\" version of the copy command through the robocopy command trumps even xcopy. the xcopy command is available in all versions of Windows"
	},
	{
		name : "Windows",
		learn : "xwizard",
		description : "the xwizard command, short for extensible Wizard, is used to register data in Windows, often from a preconfiguredÂ xmlÂ file. the xwizard command is available in Windows 11, Windows 10,Â Windows 8, and Windows 7."
	}
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
  `;

  tableBody.insertAdjacentHTML("beforeend", tableRow);
});
});