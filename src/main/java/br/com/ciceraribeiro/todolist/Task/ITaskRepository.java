package br.com.ciceraribeiro.todolist.Task;

import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;


public interface ITaskRepository extends JpaRepository<TaskModel, UUID> {

    List<TaskModel> findByUserId(UUID userId);
    
}
