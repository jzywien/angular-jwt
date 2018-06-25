import { TodoModule } from './todos.module';

describe('TodoModuleModule', () => {
  let todoModuleModule: TodoModule;

  beforeEach(() => {
    todoModuleModule = new TodoModule();
  });

  it('should create an instance', () => {
    expect(todoModuleModule).toBeTruthy();
  });
});
