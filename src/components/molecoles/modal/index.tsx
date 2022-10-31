import React,{useState} from 'react'
import Modal from 'react-modal';

Modal.setAppElement('#root')

const ModalCreateTask : React.FC = () => {
    const[task, setTask] = useState<ITodoItem[]>([]);
    const [taskTags, setTaskTags] = useState<ITagsItem[]>([]);

    const [title, setTitle] = useState<string>('');
    const [description, setDescription] = useState<string>("");
    const [modalIsOpen, setIsopen] = useState(false);

const handleCloseModal = () => {
  setIsopen(false);
};

const customStyle = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
  },
};

 const createTodos = () => {
    const newTodo: ITodoItem = {
    id: 1,
    title: title,
    description: description,
    tags: null,
    };
    setTask([...task, newTodo]);
};
console.log(title);
console.log(description);

  return (
    <div className="Modal">
      <Modal isOpen={modalIsOpen} onRequestClose={handleCloseModal}>
        <header className="header">
          <h4>Criar Modal</h4>
          <div>
            <label>Titulo</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <label>Descrição</label>
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <button onClick={createTodos}>Salvar</button>
          <button onClick={handleCloseModal}></button>
        </header>
      </Modal>
    </div>
  );
}

export default ModalCreateTask;

