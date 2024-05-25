# Реалізація інформаційного та програмного забезпечення

## SQL-скрипт для створення на початкового наповнення бази даних
```sql
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema db-io24-team4
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema db-io24-team4
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `db-io24-team4` DEFAULT CHARACTER SET utf8 ;
USE `db-io24-team4` ;

-- -----------------------------------------------------
-- Table `db-io24-team4`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db-io24-team4`.`user` (
  `id` INT NOT NULL,
  `email` VARCHAR(50) NOT NULL,
  `nickname` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE,
  UNIQUE INDEX `nickname_UNIQUE` (`nickname` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `db-io24-team4`.`role`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db-io24-team4`.`role` (
  `id` INT NOT NULL,
  `name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `name_UNIQUE` (`name` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `db-io24-team4`.`member`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db-io24-team4`.`member` (
  `id` INT NOT NULL,
  `user_id` INT NOT NULL,
  `role_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_member_user_idx` (`user_id` ASC) VISIBLE,
  INDEX `fk_member_Role1_idx` (`role_id` ASC) VISIBLE,
  CONSTRAINT `fk_member_user`
    FOREIGN KEY (`user_id`)
    REFERENCES `db-io24-team4`.`user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_member_Role1`
    FOREIGN KEY (`role_id`)
    REFERENCES `db-io24-team4`.`role` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `db-io24-team4`.`permission`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db-io24-team4`.`permission` (
  `id` INT NOT NULL,
  `name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `name_UNIQUE` (`name` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `db-io24-team4`.`grant`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db-io24-team4`.`grant` (
  `id` INT NOT NULL,
  `role_id` INT NOT NULL,
  `permission_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_Grant_Role1_idx` (`role_id` ASC) VISIBLE,
  INDEX `fk_grant_permission1_idx` (`permission_id` ASC) VISIBLE,
  CONSTRAINT `fk_Grant_Role1`
    FOREIGN KEY (`role_id`)
    REFERENCES `db-io24-team4`.`role` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_grant_permission1`
    FOREIGN KEY (`permission_id`)
    REFERENCES `db-io24-team4`.`permission` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `db-io24-team4`.`project`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db-io24-team4`.`project` (
  `id` INT NOT NULL,
  `name` VARCHAR(45) NULL,
  `description` VARCHAR(150) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `db-io24-team4`.`project_member`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db-io24-team4`.`project_member` (
  `id` INT NOT NULL,
  `member_id` INT NOT NULL,
  `project_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_project_member_member1_idx` (`member_id` ASC) VISIBLE,
  INDEX `fk_project_member_project1_idx` (`project_id` ASC) VISIBLE,
  CONSTRAINT `fk_project_member_member1`
    FOREIGN KEY (`member_id`)
    REFERENCES `db-io24-team4`.`member` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_project_member_project1`
    FOREIGN KEY (`project_id`)
    REFERENCES `db-io24-team4`.`project` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `db-io24-team4`.`task`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db-io24-team4`.`task` (
  `id` INT NOT NULL,
  `name` VARCHAR(45) NOT NULL,
  `description` VARCHAR(150) NOT NULL,
  `isCompleted` TINYINT NOT NULL,
  `project_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_task_project1_idx` (`project_id` ASC) VISIBLE,
  CONSTRAINT `fk_task_project1`
    FOREIGN KEY (`project_id`)
    REFERENCES `db-io24-team4`.`project` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;


-- -----------------------------------------------------
-- Data for table `db-io24-team4`.`role`
-- -----------------------------------------------------
START TRANSACTION;
USE `db-io24-team4`;
INSERT INTO `db-io24-team4`.`role` (`id`, `name`) VALUES (1, `ProjectOwner`);
INSERT INTO `db-io24-team4`.`role` (`id`, `name`) VALUES (2, `Developer`);

COMMIT;

-- -----------------------------------------------------
-- Data for table `db-io24-team4`.`permission`
-- -----------------------------------------------------
START TRANSACTION;
USE `db-io24-team4`;
INSERT INTO `db-io24-team4`.`permission` (`id`, `name`) VALUES (1, `create_task`);
INSERT INTO `db-io24-team4`.`permission` (`id`, `name`) VALUES (2, `delete_task`);
INSERT INTO `db-io24-team4`.`permission` (`id`, `name`) VALUES (3, `change_task_description`);
INSERT INTO `db-io24-team4`.`permission` (`id`, `name`) VALUES (4, `change_project_description`);
INSERT INTO `db-io24-team4`.`permission` (`id`, `name`) VALUES (5, `add_user`);
INSERT INTO `db-io24-team4`.`permission` (`id`, `name`) VALUES (6, `delete_user`);
INSERT INTO `db-io24-team4`.`permission` (`id`, `name`) VALUES (7, `delete_project`);

COMMIT;

-- -----------------------------------------------------
-- Data for table `db-io24-team4`.`grant`
-- -----------------------------------------------------
START TRANSACTION;
USE `db-io24-team4`;
INSERT INTO `db-io24-team4`.`grant` (`id`, `role_id`, `permission_id`) VALUES (1, 1, 1);
INSERT INTO `db-io24-team4`.`grant` (`id`, `role_id`, `permission_id`) VALUES (2, 1, 2);
INSERT INTO `db-io24-team4`.`grant` (`id`, `role_id`, `permission_id`) VALUES (3, 1, 3);
INSERT INTO `db-io24-team4`.`grant` (`id`, `role_id`, `permission_id`) VALUES (4, 1, 4);
INSERT INTO `db-io24-team4`.`grant` (`id`, `role_id`, `permission_id`) VALUES (5, 1, 5);
INSERT INTO `db-io24-team4`.`grant` (`id`, `role_id`, `permission_id`) VALUES (6, 1, 6);
INSERT INTO `db-io24-team4`.`grant` (`id`, `role_id`, `permission_id`) VALUES (7, 1, 7);
INSERT INTO `db-io24-team4`.`grant` (`id`, `role_id`, `permission_id`) VALUES (8, 2, 1);
INSERT INTO `db-io24-team4`.`grant` (`id`, `role_id`, `permission_id`) VALUES (9, 2, 2);
INSERT INTO `db-io24-team4`.`grant` (`id`, `role_id`, `permission_id`) VALUES (10, 2, 3);

COMMIT;

-- -----------------------------------------------------
-- Data for table `db-io24-team4`.`user`
-- -----------------------------------------------------
START TRANSACTION;
USE `db-io24-team4`;
INSERT INTO `db-io24-team4`.`user` (`id`, `email`, `nickname`, `password`) VALUES (1, `yellowmonkey@gmail.com`, `yellowmonkey`, `Bws3YXQ8`);
INSERT INTO `db-io24-team4`.`user` (`id`, `email`, `nickname`, `password`) VALUES (2, `wonderful@gmail.com`, `w0nderful`, `NW4Xzm4h`);
INSERT INTO `db-io24-team4`.`user` (`id`, `email`, `nickname`, `password`) VALUES (3, `denysholovin03@gmail.com`, `holovin.d`, `sDnGtCiN`);

COMMIT;

-- -----------------------------------------------------
-- Data for table `db-io24-team4`.`member`
-- -----------------------------------------------------
START TRANSACTION;
USE 'db-io24-tean4';
INSERT INTO `db-io24-team4`.`member` (`id`, `user_id`, `role_id`) VALUES (1, 1, 1)
INSERT INTO `db-io24-team4`.`member` (`id`, `user_id`, `role_id`) VALUES (2, 2, 2)
INSERT INTO `db-io24-team4`.`member` (`id`, `user_id`, `role_id`) VALUES (3, 3, 2)

COMMIT;

-- -----------------------------------------------------
-- Data for table `db-io24-team4`.`project_member`
-- -----------------------------------------------------
START TRANSACTION;
USE 'db-io24-tean4';
INSERT INTO `db-io24-team4`.`project_member` (`id`, `member_id`, `project_id`) VALUES (1, 1, 1)
INSERT INTO `db-io24-team4`.`project_member` (`id`, `member_id`, `project_id`) VALUES (2, 2, 1)
INSERT INTO `db-io24-team4`.`project_member` (`id`, `member_id`, `project_id`) VALUES (3, 3, 1)

COMMIT;

-- -----------------------------------------------------
-- Data for table `db-io24-team4`.`project`
-- -----------------------------------------------------
START TRANSACTION;
USE 'db-io24-tean4';
INSERT INTO `db-io24-team4`.`project` (`id`, `name`, `description`) VALUES (1, `course work`, `Our course work`)

COMMIT;

-- -----------------------------------------------------
-- Data for table `db-io24-team4`.`task`
-- -----------------------------------------------------
START TRANSACTION;
USE 'db-io24-tean4';
INSERT INTO `db-io24-team4`.`task` (`id`, `name`, `description`, `isCompleted`, `project_id`) VALUES (1, `Frontend`, `Frontend part`, 0, 1)
INSERT INTO `db-io24-team4`.`task` (`id`, `name`, `description`, `isCompleted`, `project_id`) VALUES (2, `Backend`, `Backend part`, 0, 1)

COMMIT;
```

## RESTfull сервіс для управління даними
Цей RESTfull сервіс розроблений із застосуванням Spring Framework, який забезпечує потужну підтримку для створення веб-додатків та сервісів. Основними компонентами є:

- Spring Boot - спрощує конфігурацію та розгортання додатку, забезпечуючи вбудовану підтримку серверів застосунків.
- Spring Data JPA - використовується для взаємодії з базами даних через Java Persistence API (JPA). Він дозволяє легко створювати репозиторії для роботи з даними, автоматизуючи більшість CRUD операцій, що полегшує роботу з базою даних.

## Entity

### Project

```Java
package db.lab6.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "project")
@Data
public class Project {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(nullable = false)
    private Long id;

    @Column(nullable = false, unique = true)
    private String name;

    @Column(nullable = false)
    private String description;
}
```
### User

```Java
package db.lab6.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "users")
@Data
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(nullable = false)
    private Long id;

    @Column(nullable = false, unique = true)
    private String email;

    @Column(nullable = false, unique = true)
    private String nickname;

    @Column(nullable = false)
    private String password;

    @ManyToOne
    @JoinColumn(name = "project_id", nullable = false)
    private Project project;
}
```

### Task

```Java
package db.lab6.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "task")
@Data
public class Task {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(nullable = false)
    private Long id;

    @Column(nullable = false, unique = true)
    private String name;

    @Column(nullable = false)
    private String description;

    @Column(nullable = true)
    private String isCompleted;

    @ManyToOne
    @JoinColumn(name = "project_id", nullable = false)
    private Project project;
}
```

## DTO

### ProjectDTO

```Java
package db.lab6.dto;

import lombok.Data;

@Data
public class ProjectDTO {
    private String name;
    private String description;
}
```

### UserDTO

```Java
package db.lab6.dto;

import lombok.Data;

@Data
public class UserDTO {
    private String email;
    private String nickname;
    private String password;
    private Long projectId;
}
```

### TaskDTO

```Java
package db.lab6.dto;

import lombok.Data;

@Data
public class TaskDTO {
    private String name;
    private String description;
    private String isCompleted;
    private Long projectId;
}
```

## Controller

### ProjectController

```Java
package db.lab6.controller;

import db.lab6.dto.ProjectDTO;
import db.lab6.entity.Project;
import db.lab6.service.ProjectService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("/project")
public class ProjectController {
    private ProjectService projectService;

    @PostMapping("/add")
    public Project addProject(@RequestBody ProjectDTO projectDTO){
        Project project = projectService.addProject(projectDTO);
        return project;
    }
    @GetMapping("/get/{id}")
    public Project getProjectById(@PathVariable Long id){
        Project project = projectService.getProjectById(id);
        return project;
    }
    @GetMapping("/get/all")
    public List<Project> getAllProjects(){
        return projectService.getAllProjects();
    }
    @PutMapping("/update/{id}")
    public Project updateProject(@PathVariable Long id, @RequestBody ProjectDTO projectDTO){
        Project project = projectService.updateProject(id, projectDTO);
        return project;
    }
    @DeleteMapping("/delete/{id}")
    public String deleteProject(@PathVariable Long id){
        projectService.deleteProject(id);
        return "Project deleted";
    }
}
```

### UserController

```Java
package db.lab6.controller;

import db.lab6.dto.UserDTO;
import db.lab6.entity.User;
import db.lab6.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("/user")
public class UserController {
    private UserService userService;

    @PostMapping("/add")
    public User addUser(@RequestBody UserDTO userDTO){
        User user = userService.addUser(userDTO);
        return user;
    }
    @GetMapping("/get/{id}")
    public User getUserById(@PathVariable Long id){
        User user = userService.getUserById(id);
        return user;
    }
    @GetMapping("/get/all")
    public List<User> getAllUsers(){
        return userService.getAllUsers();
    }
    @PutMapping("/update/{id}")
    public User updateUser(@PathVariable Long id, @RequestBody UserDTO userDTO){
        User user = userService.updateUser(id, userDTO);
        return user;
    }
    @DeleteMapping("/delete/{id}")
    public String deleteUser(@PathVariable Long id){
        userService.deleteUser(id);
        return "User deleted";
    }
}
```

### TaskController

```Java
package db.lab6.controller;

import db.lab6.dto.TaskDTO;
import db.lab6.entity.Task;
import db.lab6.service.TaskService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("/task")
public class TaskController {
    private TaskService taskService;

    @PostMapping("/add")
    public Task addTask(@RequestBody TaskDTO taskDTO) {
        Task task = taskService.addTask(taskDTO);
        return task;
    }

    @GetMapping("/get/{id}")
    public Task getTaskById(@PathVariable Long id) {
        Task task = taskService.getTaskById(id);
        return task;
    }

    @GetMapping("/get/all")
    public List<Task> getAllTasks() {
        return taskService.getAllTasks();
    }

    @PutMapping("/update/{id}")
    public Task updateTask(@PathVariable Long id, @RequestBody TaskDTO taskDTO) {
        Task task = taskService.updateTask(id, taskDTO);
        return task;
    }

    @DeleteMapping("/delete/{id}")
    public String deleteTask(@PathVariable Long id) {
        taskService.deleteTask(id);
        return "Task deleted";
    }
}
```

## Service

### ProjectService

```Java
package db.lab6.service;

import db.lab6.dto.ProjectDTO;
import db.lab6.entity.Project;
import db.lab6.repository.ProjectRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class ProjectService {
    private ProjectRepository projectRepository;

    public Project addProject(ProjectDTO projectDTO) {
        Project project = new Project();
        project.setName(projectDTO.getName());
        project.setDescription(projectDTO.getDescription());
        return projectRepository.save(project);
    }

    public Project getProjectById(Long id) {
        return projectRepository.findById(id).orElseThrow(() -> new IllegalArgumentException("Project not found"));
    }

    public List<Project> getAllProjects() {
        return projectRepository.findAll();
    }

    public Project updateProject(Long id, ProjectDTO projectDTO) {
        Project project = projectRepository.findById(id).orElseThrow(() -> new IllegalArgumentException("Project not found"));
        project.setName(projectDTO.getName());
        project.setDescription(projectDTO.getDescription());
        return projectRepository.save(project);
    }
    public void deleteProject(Long id) {
        if (projectRepository.existsById(id)) {
            projectRepository.deleteById(id);
        } else {
            throw new IllegalArgumentException("Project not found");
        }
    }
}
```

### UserService

```Java
package db.lab6.service;

import db.lab6.dto.UserDTO;
import db.lab6.entity.User;
import db.lab6.repository.ProjectRepository;
import db.lab6.repository.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class UserService {
    private UserRepository userRepository;
    private ProjectRepository projectRepository;

    public User addUser(UserDTO userDTO) {
        User user = new User();
        user.setEmail(userDTO.getEmail());
        user.setNickname(userDTO.getNickname());
        user.setPassword(userDTO.getPassword());
        user.setProject(projectRepository.findById(userDTO.getProjectId()).orElseThrow(() -> new IllegalArgumentException("Project not found")));
        return userRepository.save(user);
    }
    public User getUserById(Long id) {
        return userRepository.findById(id).orElseThrow(() -> new IllegalArgumentException("User not found"));
    }

    public List<User> getAllUsers(){
        return userRepository.findAll();
    }

    public User updateUser(Long id, UserDTO userDTO) {
        User user = userRepository.findById(id).orElseThrow(() -> new IllegalArgumentException("User not found"));
        user.setEmail(userDTO.getEmail());
        user.setNickname(userDTO.getNickname());
        user.setPassword(userDTO.getPassword());
        user.setProject(projectRepository.findById(userDTO.getProjectId()).orElseThrow(() -> new IllegalArgumentException("Project not found")));
        return userRepository.save(user);
    }

    public void deleteUser(Long id) {
        if (userRepository.existsById(id)) {
            userRepository.deleteById(id);
        } else {
            throw new IllegalArgumentException("User not found");
        }
    }
}
```

### TaskService

```Java
package db.lab6.service;

import db.lab6.dto.TaskDTO;
import db.lab6.entity.Task;
import db.lab6.repository.ProjectRepository;
import db.lab6.repository.TaskRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class TaskService {
    private TaskRepository taskRepository;
    private ProjectRepository projectRepository;

    public Task addTask(TaskDTO taskDTO) {
        Task task = new Task();
        task.setName(taskDTO.getName());
        task.setDescription(taskDTO.getDescription());
        task.setIsCompleted(taskDTO.getIsCompleted());
        task.setProject(projectRepository.findById(taskDTO.getProjectId()).orElseThrow(() -> new IllegalArgumentException("Project not found")));
        return taskRepository.save(task);
    }
    public Task getTaskById(Long id) {
        return taskRepository.findById(id).orElseThrow(() -> new IllegalArgumentException("Task not found"));
    }

    public List<Task> getAllTasks() {
        return taskRepository.findAll();
    }

    public Task updateTask(Long id, TaskDTO taskDTO) {
        Task task = taskRepository.findById(id).orElseThrow(() -> new IllegalArgumentException("Task not found"));
        task.setName(taskDTO.getName());
        task.setDescription(taskDTO.getDescription());
        task.setIsCompleted(taskDTO.getIsCompleted());
        task.setProject(projectRepository.findById(taskDTO.getProjectId()).orElseThrow(() -> new IllegalArgumentException("Project not found")));
        return taskRepository.save(task);
    }

    public void deleteTask(Long id) {
        if (taskRepository.existsById(id)){
            taskRepository.deleteById(id);
        } else {
            throw new IllegalArgumentException("Task not found");
        }
    }
}
```

## Repository

### ProjectRepository

```Java
package db.lab6.repository;

import db.lab6.entity.Project;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProjectRepository extends JpaRepository<Project, Long> {

}
```

### UserRepository

```Java
package db.lab6.repository;

import db.lab6.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {

}
```

### TaskRepository

```Java
package db.lab6.repository;

import db.lab6.entity.Task;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TaskRepository extends JpaRepository<Task, Long> {

}
```

## SpringMainClass

```Java
package db.lab6;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class Lab6Application {

	public static void main(String[] args) {
		SpringApplication.run(Lab6Application.class, args);
	}

}
```