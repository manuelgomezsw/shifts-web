-- ================================
-- Franchise Management Database
-- ================================

-- 1. Franchises
CREATE TABLE franchises (
                          id INT AUTO_INCREMENT PRIMARY KEY,
                          name VARCHAR(100) NOT NULL,
                          location VARCHAR(255),
                          active BOOLEAN DEFAULT TRUE
);

-- 2. Roles
CREATE TABLE roles (
                     id INT AUTO_INCREMENT PRIMARY KEY,
                     name VARCHAR(100) NOT NULL,
                     base_salary DECIMAL(10,2) NOT NULL,
                     active BOOLEAN DEFAULT TRUE
);

-- 3. Employees
CREATE TABLE employees (
                         id INT AUTO_INCREMENT PRIMARY KEY,
                         franchise_id INT NOT NULL,
                         role_id INT NOT NULL,
                         first_name VARCHAR(100) NOT NULL,
                         last_name VARCHAR(100) NOT NULL,
                         document_type VARCHAR(20),
                         document_number VARCHAR(50),
                         phone VARCHAR(50),
                         email VARCHAR(100),
                         active BOOLEAN DEFAULT TRUE,
                         CONSTRAINT fk_employee_franchise FOREIGN KEY (franchise_id) REFERENCES franchises(id),
                         CONSTRAINT fk_employee_role FOREIGN KEY (role_id) REFERENCES roles(id)
);

-- 4. Stores (points of sale for each franchise)
CREATE TABLE stores (
                      id INT AUTO_INCREMENT PRIMARY KEY,
                      franchise_id INT NOT NULL,
                      name VARCHAR(100) NOT NULL,
                      location VARCHAR(255),
                      address VARCHAR(255),
                      active BOOLEAN DEFAULT TRUE,
                      CONSTRAINT fk_store_franchise FOREIGN KEY (franchise_id) REFERENCES franchises(id)
);

-- 5. Store Employees (assignment of employees to stores)
CREATE TABLE store_employees (
                               id INT AUTO_INCREMENT PRIMARY KEY,
                               store_id INT NOT NULL,
                               employee_id INT NOT NULL,
                               start_date DATE NOT NULL,
                               end_date DATE DEFAULT NULL,
                               active BOOLEAN DEFAULT TRUE,
                               CONSTRAINT fk_store_emp_store FOREIGN KEY (store_id) REFERENCES stores(id),
                               CONSTRAINT fk_store_emp_employee FOREIGN KEY (employee_id) REFERENCES employees(id)
);

-- 6. Shifts
CREATE TABLE shifts (
                      id INT AUTO_INCREMENT PRIMARY KEY,
                      name VARCHAR(100) NOT NULL,
                      start_time TIME NOT NULL,
                      end_time TIME NOT NULL,
                      lunch_minutes INT DEFAULT 0,
                      active BOOLEAN DEFAULT TRUE
);

-- 7. Pay Periods (quincenas)
CREATE TABLE pay_periods (
                           id INT AUTO_INCREMENT PRIMARY KEY,
                           name VARCHAR(50) NOT NULL,
                           start_date DATE NOT NULL,
                           end_date DATE NOT NULL,
                           active BOOLEAN DEFAULT TRUE
);

-- 8. Store Shifts (shifts for each store)
CREATE TABLE store_shifts (
                            id INT AUTO_INCREMENT PRIMARY KEY,
                            store_id INT NOT NULL,
                            shift_id INT NOT NULL,
                            pay_period_id INT NOT NULL,
                            assigned_date DATE NOT NULL,
                            CONSTRAINT fk_store_shift_store FOREIGN KEY (store_id) REFERENCES stores(id),
                            CONSTRAINT fk_store_shift_shift FOREIGN KEY (shift_id) REFERENCES shifts(id),
                            CONSTRAINT fk_store_shift_period FOREIGN KEY (pay_period_id) REFERENCES pay_periods(id)
);

-- 9. Absences
CREATE TABLE absences (
                        id INT AUTO_INCREMENT PRIMARY KEY,
                        employee_id INT NOT NULL,
                        date DATE NOT NULL,
                        hours DECIMAL(5,2) NOT NULL,
                        reason VARCHAR(255),
                        CONSTRAINT fk_absence_employee FOREIGN KEY (employee_id) REFERENCES employees(id)
);

-- 10. Periodos de rotación
CREATE TABLE rotation_periods (
                                id INT AUTO_INCREMENT PRIMARY KEY,
                                name VARCHAR(50) NOT NULL,         -- ej. 'Weekly', 'Biweekly', 'Monthly'
                                code VARCHAR(20) UNIQUE NOT NULL   -- ej. 'weekly', 'biweekly', 'monthly'
);
ALTER TABLE stores ADD COLUMN rotation_period_id INT;
ALTER TABLE stores ADD CONSTRAINT fk_rotation FOREIGN KEY (rotation_period_id) REFERENCES rotation_periods(id);
