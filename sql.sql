use lamine-rds;

drop table user;

create table user(
id int primary key Not null auto_increment,
userName varchar(25),
other varchar(250) default 'user'
);

insert into user(userName)
values("lamine");

insert into user(userName)
values("sunga");



select *
from user;


