import javax.swing.*;
import javax.swing.event.*;
import java.awt.*;
import java.awt.event.*;
import java.io.*;
public class JEdit extends JFrame implements ActionListener
{
  JButton open = new JButton("Open");
  JButton save = new JButton("Save");
  JButton compile = new JButton("Compile");
  JButton run = new JButton("Run");
  JButton help = new JButton("Help");
  JTextArea code = new JTextArea("",28,65);
  JTextArea output = new JTextArea("",7,65);
  File fileS = null;
  Font cf = new Font("monospaced",Font.PLAIN,12);
  public JEdit()
  {
    super("Java CinnaComp");
    setSize(500,710);
    setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
    setVisible(true);
    Container contentArea = getContentPane();
    contentArea.setBackground(Color.lightGray);
    FlowLayout flowManager = new FlowLayout();
    contentArea.setLayout(flowManager);
    contentArea.add(save);
    save.addActionListener(this);
    contentArea.add(open);
    open.addActionListener(this);
    contentArea.add(compile);
    compile.addActionListener(this);
    contentArea.add(run);
    run.addActionListener(this);
    contentArea.add(help);
    help.addActionListener(this);
    JScrollPane scrollPane = new JScrollPane(code,
                                             JScrollPane.VERTICAL_SCROLLBAR_ALWAYS,
                                             JScrollPane.HORIZONTAL_SCROLLBAR_ALWAYS);
    contentArea.add(scrollPane);
    code.setFont(cf);
    JScrollPane scrollPane2 = new JScrollPane(output,
                                             JScrollPane.VERTICAL_SCROLLBAR_ALWAYS,
                                             JScrollPane.HORIZONTAL_SCROLLBAR_ALWAYS);
    contentArea.add(scrollPane2);
    output.setFont(cf);
    setContentPane(contentArea);
  }
  public void actionPerformed(ActionEvent event)
  {
    if(event.getSource() == save)
    {
      JFileChooser saveChooser = new JFileChooser();
      saveChooser.setFileSelectionMode(JFileChooser.FILES_ONLY);
      int result = saveChooser.showSaveDialog(this);
      if(result == JFileChooser.CANCEL_OPTION)
        return;
      fileS = saveChooser.getSelectedFile();
      if(fileS == null || fileS.getName().equals(""))
        JOptionPane.showMessageDialog(null, "Invalid File Name",
                    "Invalid File Name", JOptionPane.ERROR_MESSAGE);
      else
      {
        try
        {
          FileWriter saveFile = new FileWriter(fileS.getPath());
          BufferedWriter bufferS = new BufferedWriter(saveFile);
          bufferS.write(code.getText());
          bufferS.close();
        }
        catch (Exception e1)
        {
        }
      }
    }

    if(event.getSource() == open)
    {
      JFileChooser openChooser = new JFileChooser();
      openChooser.setFileSelectionMode(JFileChooser.FILES_ONLY);
      int result2 = openChooser.showOpenDialog(this);
      if(result2 == JFileChooser.CANCEL_OPTION)
        return;
      File fileO = openChooser.getSelectedFile();
      if(fileO == null || fileO.getName().equals(""))
        JOptionPane.showMessageDialog(null, "Invalid File Name",
                    "Invalid File Name", JOptionPane.ERROR_MESSAGE);
      else
      {
        try
        {
          FileReader openFile = new FileReader(fileO.getPath());
          BufferedReader bufferO = new BufferedReader(openFile);
          String textline = null;
          while((textline = bufferO.readLine()) != null)
          {
            code.append(textline+"\n");
          }
          bufferO.close();
        }
        catch (Exception e2)
        {
        }
      }
    }
    if(event.getSource()==compile)
    {
      try
      {
        Process compile = Runtime.getRuntime().exec("javac -cp " +
            fileS.getPath());
        output.setText(compile.getErrorStream().toString());
      }
      catch(Exception e3)
      {
        output.append("\n"+e3.toString());
      }
    }
    if (event.getSource() == run) {
      try {
        Process run = Runtime.getRuntime().exec("java -cp " +
            fileS.getParent()+fileS.getName());
        output.setText(run.getErrorStream().toString());
        output.append("\n"+run.getOutputStream().toString());
      }
      catch (Exception e4) {
        output.append("\n" + e4.toString());
      }
    }
  }
  public static void main (String [] args)
  {
      new JEdit();
  }
}