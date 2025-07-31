import { TrashIcon } from 'lucide-react';
import { Container } from '../../components/container';
import { DefaultButton } from '../../components/DefaultButton';
import { Heading } from '../../components/heading';
import { MainTemplete } from '../../templates/MainTemplate/Index';

import styles from './styles.module.css';

export function History() {
  return (
    <MainTemplete>
      <Container>
        <Heading>
          <span>History</span>
          <span className={styles.buttonContainer}>
            <DefaultButton icon={<TrashIcon />} color='red' />
          </span>
        </Heading>
      </Container>
      <Container>
        <div className='resposiveTable'>
          <table>
            <thead>
              <tr>
                <th>Tarefa</th>
                <th>Duração</th>
                <th>Data</th>
                <th>Status</th>
                <th>Tipo</th>
              </tr>
            </thead>
            <tbody>
              {Array.from({length: 20}).map((_, index) => {
                return (
              
                <tr key={index}>
                  <td>Estudar</td>
                  <td>25min</td>
                  <td>20/04/2015 08:00</td>
                  <td>Completa</td>
                  <td>Foco</td> 
                </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </Container>
    </MainTemplete>
  );
}

