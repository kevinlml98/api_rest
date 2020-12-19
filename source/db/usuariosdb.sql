create database usersdb;
use usersdb;

create table USERS(
US_ID int not null auto_increment primary key,
US_Name varchar(50) not null,
US_Password varchar(50)
);


DELIMITER $$
create procedure adduser(in IN_US_Name varchar(50), in IN_US_Password varchar(50))
begin
insert into USERS(US_Name) values (IN_US_Name);
insert into USERS(US_Password) values (IN_US_Password);
end
$$

DELIMITER $$
create procedure deleteuser(in IN_US_ID int)
begin
delete from USERS where US_ID = IN_US_ID;
end
$$

DELIMITER $$
create procedure showuser(in IN_US_ID int)
begin
select * from USERS where US_ID = IN_US_ID;
end
$$

DELIMITER $$
create procedure updatepassword(in IN_US_ID int, in IN_US_Password varchar(50))
begin
update USERS set US_Password = IN_US_Password where US_ID = IN_US_ID;
end
$$