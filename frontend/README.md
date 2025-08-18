# Guia de Contribuição - Whitelabel 
## 📥 Clonar o repositório
Antes de tudo, clone o projeto para sua máquina:  
git clone https://github.com/seu-usuario/nome-do-repositorio.git

Acesse a pasta:
cd nome-do-repositorio

## 🌿 Criar uma nova branch
Sempre crie sua branch a partir da main.  

### **O padrão de nome será:**  
**feature/f-XX** → para novas funcionalidades  
**fix/f-XX** → para correções  
**hotfix/f-XX** → para correções urgentes em produção  

Onde f é de frontend e XX é o número da task no kanban.Exemplo: Task #5 → feature/f-05
Passos:

### **Atualize sua main:**  
git checkout main  
git pull origin main


Crie sua branch:

git checkout -b feature/f-05

## 💻 Trabalhar na sua branch
Faça as alterações necessárias e adicione os arquivos:  

git add .

Faça commits descritivos:  

git commit -m "feat: adiciona componente de login (task #5)"

## ⬆️ Enviar branch para o repositório remoto
git push origin feature/f-05

## 🔀 Criar Pull Request (PR)

Acesse o repositório no GitHub.  
Clique em Compare & Pull Request.  
Descreva as alterações feitas.  
Relacione a task correspondente.  

## 🔄 Atualizar sua branch com a main
Se alguém fez alterações na main enquanto você trabalhava:  
git checkout main  
git pull origin main  
git checkout feature/f-05  
git merge main  

Resolva conflitos se houver, depois:
git add .  
git commit -m "merge main into feature/f-05"  

## ✅ Fluxo Resumido
git clone ...  
git checkout main  
git pull origin main  
git checkout -b feature/f-XX  
# Alterar código
git add .  
git commit -m "mensagem"  
git push origin feature/f-XX  
# Criar Pull Request
