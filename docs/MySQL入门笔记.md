# MySQL入门笔记

> 1. sql语句以分号结尾
> 2. sql语句关键字不区分大小写

## 库操作

### 增

```mysql
# 创建数据库，并指定字符集及排序规则
CREATE DATABASE [IF NOT EXISTS] 数据库名 [CHARACTER SET uft8mb4] [COLLATE 排序规则];
```

排序规则：

	- `utf8mb4_0900_ai_ci`：不区分重音，不区分大小写
	- `utf8mb4_0900_as_ci`：区分重音，不区分大小写
	- `utf8mb4_0900_as_cs`：区分重音，区分大小写

### 删

```mysql
# 删除数据库
DROP DATABASE [IF EXISTS] 数据库名;
```

### 改

```mysql
# 修改字符集及排序规则
ALTER DATABASE 数据库名 CHARACTER SET 字符集 COLLATE 排序规则;
```

### 查

```mysql
# 查询所有数据库
SHOW DATABASES;

# 查询当前使用的数据库
SELECT DATABASE();

# 查询当前数据库字符集及排序规则
SELECT @@character_set_database, @@collation_database;

# 查询指定库的所有表
SHOW TABLES FROM 数据库名;
```

## 表操作

> 对表及数据操作时，需先使用`use 数据库名;`选中数据库

### 增

```mysql
CREATE TABLE [IF NOT EXISTS] 表名 (
	列名 列类型 [列约束] [COMMENT '列注释'],
  列名 列类型 [列约束] [COMMENT '列注释'],
  [列约束]
) [表约束] [COMMENT '表注释']
```

### 删

```mysql
# 删除表
DROP TABLE [IF EXISTS] 表名;

# 清空表数据
TRUNCATE TABLE 表名;
```

### 改

```mysql
# 修改表名
ALTER TABLE 表名 RENAME TO 新表名;

# 添加列
ALTER TABLE 表名 ADD 列名 列类型 [FIRST|AFTER 字段名];

# 删除列
ALTER TABLE 表名 DROP 列名;

# 修改列名
ALTER TABLE 表名 CHANGE 列名 新列名 新列类型 [FIRST|AFTER 字段名];

# 修改列类型
ALTER TABLE 表名 MODIFY 列表 列类型 [FIRST|AFTER 字段名];
```

### 查

```mysql
# 查看表结构
DESC 表名;
```



## 数据操作

### 增

```mysql
# 新增一条数据，需为每个字段指定值
INSERT INTO 表名 VALUES(value1, value2...);

# 指定字段新增数据
INSERT INTO 表名 (列名1，列名2...) values(value1, value2...);

# 新增多条数据
INSERT INTO 表名 VALUES(value1, value2...),...(value1, value2......);

INSERT INTO 表名 (列名1，列名2...) values(value1, value2...), ...(value1, value2...);
```

### 删

```mysql
# 全表删除
DELETE FROM 表名;

# 条件删除
DELETE FROM 表名 [条件约束];
```

### 改

```mysql
# 修改列值，全表修改
UPDATE 表名 SET 列名1=值,...列名2=值;

# 修改列值，条件修改
UPDATE 表名 SET 列名1=值,...列名2=值 [条件约束];
```

### 查

```mysql
# 基础查询
SELECT 列名1 FROM 表名;

# 列别名
SELECT 列名1 as 列别名 FROM 表名;

# 去重
SELECT DISTINCT 列名1 FROM 表名;

# 常数列
SELECT 常数列值 as 常数列名, 列名1 FROM 表名;
```

