# https://leetcode.cn/problems/department-highest-salary/

# 部门工资最高的员工

# Write your MySQL query statement below
# [uncommit]

select 
  Department.name as 'Department',
  Employee.name as 'Employee',
  Employee.salary as 'Salary'
from 
  Employee join Department on Employee.departmentId = Department.id
where
  (Employee.departmentId, Employee.salary)
  in
  (
    select Employee.departmentId, max(Employee.salary)
    from Employee
    group by Employee.departmentId    
  )    
