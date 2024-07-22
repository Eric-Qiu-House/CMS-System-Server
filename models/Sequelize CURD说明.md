Sequelize 提供了一系列方法来执行数据库表中的 CRUD（创建、读取、更新、删除）操作。以下是一些常用的方法及其说明：

### 1. `findByPk(id, [options])`
根据主键查找记录。
- **参数：**
  - `id`：要查找的记录的主键值。
  - `[options]`：可选的查询选项（例如，包含关联模型的数据）。
- **返回：**
  - 查找到的记录对象，如果没有找到则返回 `null`。

**示例：**
```javascript
const user = await User.findByPk(1);
```

### 2. `findOne([options])`
根据条件查找单个记录。
- **参数：**
  - `[options]`：查询选项，如 `where` 条件、排序、包含关联数据等。
- **返回：**
  - 查找到的记录对象，如果没有找到则返回 `null`。

**示例：**
```javascript
const user = await User.findOne({ where: { account_: 'john.doe' } });
```

### 3. `findAll([options])`
查找所有符合条件的记录。
- **参数：**
  - `[options]`：查询选项，如 `where` 条件、排序、分页、包含关联数据等。
- **返回：**
  - 包含所有符合条件记录的数组。

**示例：**
```javascript
const users = await User.findAll({ where: { email_: 'john.doe@example.com' } });
```

### 4. `findAndCountAll([options])`
查找所有符合条件的记录，并返回记录总数。
- **参数：**
  - `[options]`：查询选项，如 `where` 条件、排序、分页、包含关联数据等。
- **返回：**
  - 一个对象，包含 `count`（记录总数）和 `rows`（记录数组）。

**示例：**
```javascript
const result = await User.findAndCountAll({ where: { email_: 'john.doe@example.com' }, limit: 10, offset: 0 });
const totalCount = result.count;
const users = result.rows;
```

### 5. `create(values, [options])`
创建新记录。
- **参数：**
  - `values`：新记录的字段和值。
  - `[options]`：可选的查询选项。
- **返回：**
  - 创建的记录对象。

**示例：**
```javascript
const user = await User.create({ fullname_: 'John Doe', account_: 'john.doe', password_: 'password123', email_: 'john.doe@example.com' });
```

### 6. `update(values, [options])`
更新符合条件的记录。
- **参数：**
  - `values`：要更新的字段和值。
  - `[options]`：查询选项，如 `where` 条件。
- **返回：**
  - 一个数组，第一个元素是受影响的行数。

**示例：**
```javascript
const [updatedRowsCount] = await User.update({ fullname_: 'John Updated' }, { where: { id: 1 } });
```

### 7. `destroy([options])`
删除符合条件的记录。
- **参数：**
  - `[options]`：查询选项，如 `where` 条件。
- **返回：**
  - 受影响的行数。

**示例：**
```javascript
const deletedRowsCount = await User.destroy({ where: { id: 1 } });
```

### 8. `count([options])`
统计符合条件的记录数。
- **参数：**
  - `[options]`：查询选项，如 `where` 条件。
- **返回：**
  - 记录数。

**示例：**
```javascript
const userCount = await User.count({ where: { email_: 'john.doe@example.com' } });
```

### 9. `max(field, [options])`
获取指定字段的最大值。
- **参数：**
  - `field`：要查询的字段名。
  - `[options]`：查询选项，如 `where` 条件。
- **返回：**
  - 指定字段的最大值。

**示例：**
```javascript
const maxId = await User.max('id');
```

### 10. `min(field, [options])`
获取指定字段的最小值。
- **参数：**
  - `field`：要查询的字段名。
  - `[options]`：查询选项，如 `where` 条件。
- **返回：**
  - 指定字段的最小值。

**示例：**
```javascript
const minId = await User.min('id');
```

### 11. `sum(field, [options])`
获取指定字段的总和。
- **参数：**
  - `field`：要查询的字段名。
  - `[options]`：查询选项，如 `where` 条件。
- **返回：**
  - 指定字段的总和。

**示例：**
```javascript
const totalUsers = await User.sum('id');
```

这些方法提供了丰富的查询和操作数据库记录的功能，使用时可以根据具体的业务需求灵活搭配查询选项。