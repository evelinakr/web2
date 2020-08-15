export interface Task {
  id: number;
  department_id: number;
  department_name: string;
  name: string;
  description: string;
  employees: number[];
  employeesByName: string[];
  due_date: string;
}