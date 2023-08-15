# Linux
Linux is an open source operating system (OS). An operating system is the software that directly manages a system’s hardware and resources, like CPU, memory, and storage. The OS sits between applications and hardware and makes the connections between all of your software and the physical resources that do the work.


## Roadmap

1. What is Docker?

2. What Problem does Docker solve?




 <hr>

## 1. What is Terminal?

- The terminal is a very powerful tool that is disigned to allow us to issue what are known as command to our computer.
- Now the idea is that the computer will obey these commands, we hope, and make stuff happen as a result.

## 2. Terminal vs Shell
- When we want to execute a command in Linux, we type it into the terminal window. 
- The terminal then takes the command we've typed and passes it to the shell. 
- The shell interprets the command, carries out the requested action, and then provides you with the output or response right back through the terminal window. 
- It's a way for us to communicate our intentions to the computer's operating system using text-based commands.

## 3. Understanding command structure
```bash
    CommandName options inputs
```

### CommandName
- This lets the shell know what program we actually want to run.
- Once the shell knows what program we want to run or it knows the name of the program we want to run, the shell will then search for that program on something called shells path, which is a list of folders that contains these programs.
- we can actually see our shells path by typing echo, then a dollar sign, then path
```bash
echo $PATH

# Output
    /home/pc/.nvm/versions/node/v16.19.0/bin:/home/pc/.local/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin:/snap/bin
```
- So it will look in the leftmost  folder, and if it doesn't find it there, it will move to the next one until it finds.
- If it didn't find it will show an error like command not found.

```bash
    which <CommandName>

    # This will actually show in which folder the command has been stored.

    # Example
    which git

    /usr/bin/git
```

### Options and inputs
- We can customize the way that commands work by giving them different options and different inputs.
- So it's important to note that not all commands actully require inputs. Some inputs are optional. 
- date command doesn't strictly require an input. 
- But most commands do require some form of input which can actually have a fancy name called an operand. Because commands operate on the input.

```bash
    date -u

    # It's basicaly shows the date in the UTC format. It's an example for options
```

## 4. Linux Manual
- If we want to look up information about any command.
- First to search the manual, we would have to use the 'man' command.
- The 'man' command is short for the word 'manual', and it's the command that deals with everything to do with the manual.

```bash
    man -k which

    # -k is an option here, which deals with searching.
```
- And it's going to look all the way through the manual and find anything that might be relevant to that search term.
- When we enter this command, we get quite a few lines of output there. 


### Linux Basic Commands
#### ls
- It's used to list the files and foleders within the directory.
```bash
    ls -l

    # -l option is used to get the list the files and folders in a much more detailed fashion.
```

- There are 2 ways to get data into commands and 2 ways to get data out.
- The ways in <u>standard input</u> and <u>command line arguments</u> and the ways out are <u>standard output</u> and <u>standard error</u>.
- These are the 4 data streams.

### These data streams have numbers associated with them. 
#### 0 : Standard input
#### 1 : Standard output
#### 2 : Standard error
```bash
    cat > fileName
    cat > out.txt
    or
    cat 1> out.txt

    # It will allow us to write standard input and redirect those inputs to out.txt file.
```
- Redirection by default will remove everything in a file before writing to it.

#### How can we write to a file again using redirection without truncating it?
```bash
    cat >> out.txt
    or
    cat 1>> out.txt
```

#### Rredirect a standard error
```bash
    cat -k something 2> error.txt
    cat -k something 2>> error.txt
```
- A common use of this kind of redirecting error is to keep track of log messages coming from web servers and things like that.

#### Redirect standard error and standard output at the same time
```bash
    cat 1>> out.txt 2>> error.txt
```

#### Redirect standard input 
```bash
    cat 0< input.txt 
    or
    cat < input.txt 
```

#### If we want to redirect standard input 
```bash
    cat 0< input.txt 1> hello.txt
    or
    cat < input.txt > hello.txt
```

- '>' Will <b>overwrite</b> a file before writing it.
- '>>' will <b>append</b> to what's already there.

### Pipes
- If we wanted to connect the standard output of one command to the standard input of another command, in that case we use pipes.
- Each linux command is designed to do one task extremely well.
- So if we can continually pipe these highly specialized commands together and pass data between them, we can build advanced pipelines to do pretty much any task that we can think of.

#### 1. Write date in to date.txt
```bash
    date > date.txt 

    # date.txt looks like
    Saturday 12 August 2023 04:02:30 PM IST
```
#### 2. Cut the 1st word from the date.txt file
```bash
    cut < date.txt --delimiter " " --fields 1

    # Output
    Saturday
```

- --delimiter devides the columns, we have to mention where we have to devide, in the above case we devides on every " ". ( like split(" ") method in js)
- --fields is used to specify, which field we want.

#### 3. Instead of doing the process in 2 steps, do it in a single step
```bash
    date | cut --delimiter " " --fields 1

    # Pipe symbol ( | )
```
#### 4. Write the output data which returned by the above command to today.txt
```bash
    date | cut --delimiter " " --fields 1 > today.txt
    # It perfectly writes the out in to todat.txt

    date >> date.txt | cut --delimiter " " --fields 1 > today.txt
    # If we try to do like this, the pipe breaks, because before passing it writes to date.txt
``` 

## 5. Linux file system
### 1. pwd (printing working directory)
- pwd command is used to print the current directory

### 2. ls
- ls command is used to list out all the files and folders in the current directory.
- ls doesn't take standard input, so we can't pipe to it, instead we need to give everything as command line arguments.

```bash
    ls -l #long form format

    # output example
    drwx------  2 pc pc     4096 May 17 10:51  Documents
    drwxrwxr-x  6 pc pc     4096 Aug 12 12:19  Downloads
    drwxrwxr-x  5 pc pc     4096 Jun 22 15:29  gitTask
    -rw-rw-r--  1 pc pc    24444 Jul 27 18:44  localhost-1690463684525.log
    -rw-rw-r--  1 pc pc       49 Jul 17 15:46  mongo
    drwxrwxr-x  3 pc pc     4096 Aug  8 17:03  mono
    drwxrwxr-x  3 pc pc     4096 Aug  8 16:57  monoRepo

```

- This puts everything in long form format, we get lot more information about the files and directories, including the file permissions.

```bash
    drwxrwxr-x  3 pc pc     4096 Aug  8 16:57  monoRepo

    # In the above information 'drwxr-xr-x' this is indicating the permissions
```

- <b>drwxr-xr-x</b>
- first letter 'd' represents the directory.
- <b>rwx</b> is for the user. Read, write, execute.
- <b>r-x</b> is for the group. Just read and execute, no writing.
- <b>r-x</b> is for the everyone else. Just read and execute, no writing.


### 3. cd
- cd command stands for change directory.

### 4. file
- file command is used to get the details about the file.
- In linux file extension not really matter.
- Unlike windows, Linux doesn't determine file type using the file extension, but instead it reads a piece of code of that inserted top of every file.
- That piece of code is known as header, and it serves as kind of label to linux to read.

## 6. Wild cards

### * wild card
```bash
    ls *.txt
    ls */*.txt

    # * can be any word or name with any length
```

### ? wild card
- Wild cards are used to build patterns called "Regular expressions".

```bash
    ls ?.txt
    ls */?.txt

    # ? should be 1 character
    # In the above case it will search for files which has .txt at the end and the file name should be 1 character
    # Example
    # f.txt   t.txt   1.txt
```


```bash
    ls file?.txt
    ls */file?.txt

    # Output
    # file1.txt   file2.txt   filez.txt
```

### [ ] wild card
```bash
    ls file[0123456789].txt
    or
    ls file[0-9].txt

    # Output
    file1.txt file2.txt file3.txt
```

```bash
    ls file[ABCDEFG].txt
    ls file[A-Z].txt

    # Output
    fileA.txt fileB.txt fileC.txt
```

```bash
    ls file[0-9][0-9].txt

    # Output
    file11.txt file10.txt file20.txt
```


```bash
    ls file[0-9ABC].txt

    # Output
    file1.txt file2.txt file3.txt fileA.txt fileB.txt fileC.txt
```

### mkdir
    - It is basically used to create directories.
```bash
    mkdir newFolder

    mkdir folder/new/user
    # If we try to create nested folder which the parent folder doesn't exit, it will throw error.
```

- To create folder which has multiple hierarchy level of folders we have to write command like this 
```bash
    mkdir -p folder/new/user 
```
- -p option is used to create the entire path in one go.

```bash
    mkdir -p delfolder/folder{1,2,3,4,5} 
    or
    mkdir -p delfolder/folder{1..5} 

    # This will create folder1 folder2 folder3 folder4 folder5 named folders within delfolder
```

### rmdir
    - is used to remove empty directories.

### touch 
    - touch command is used to create files

### rm
    - rm command is used to remove files.
    - rm -r is a very powerful command.
    - by using rm command we can able to delete folders and files which are within the directory. 

```bash
    rm -ri delfolder/

    # -ri here means, r is for recursive and i for interactive, so in this cast before deleting each file and directory
    it will ask for permission.
```
### cp 
- cp command is used to copy files and directories.

```bash
    cp <from> <to>
    cp text.txt copy.txt

    # This will copy the contents inside the text.txt to copy.txt file. 
    # If the copy.txt file doesn't exist it creates that file.

```

- The last argument always should be <to>, we can copy multiple files or directories to one destination.
```bash
    cp text1.txt text2.txt text3.txt  folder

    # in this case cp <from> <from> <from> <to>
```

### mv 
- mv command is used to move and rename files and folders.

```bash
    mv oldName.txt newName.txt
    mv oldFolder newFolder
```

```bash
    mv newFolder/* .
    #It moves the all files and folders inside the newFolder in to the current directory.
```




































    