package Launcher;
import java.awt.ComponentOrientation;
import java.awt.Container;
import java.awt.Dimension;
import java.awt.FlowLayout;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.text.DateFormat;

import javax.swing.JButton;
import javax.swing.JFormattedTextField;
import javax.swing.JFrame;
import javax.swing.SwingUtilities;

import UI.CalendarWindow;
import UI.WeeklyCalendar;

//import java.time.LocalTime;  Can be useful in future
import java.util.Date;  
/*
 * @Grace
 * @Date 2/17/2021
 */

public class MainWindow extends JFrame{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	JFormattedTextField textField = new JFormattedTextField(DateFormat.getDateInstance(DateFormat.SHORT));

	public static void main( String[]args) {

		SwingUtilities.invokeLater(new Runnable() {
			public void run() {
				MainWindow window = null;
				try {
					window = new MainWindow();
					window.setVisible(true);
				}
				catch (Exception exp) {
					exp.printStackTrace();
				}
			}
		});
	}

	public MainWindow() 
	{
		setDefaultCloseOperation(EXIT_ON_CLOSE);
		setSize(368,362);
		setTitle("EDUK Planner");
		//Layout
		Container cp = getContentPane();
		FlowLayout flowLayout = new FlowLayout();
		cp.setLayout(flowLayout);
		cp.setComponentOrientation(ComponentOrientation.LEFT_TO_RIGHT);

		textField.setValue(new Date()); // Current Date
		textField.setPreferredSize(new Dimension(130,30));

		//add UI controls to Plane
		cp.add(textField);
		JButton calButton = new JButton("Pick a Date");
		cp.add(calButton);

		//		add Calendar

		CalendarWindow calendar = new CalendarWindow();

		calButton.addActionListener(new ActionListener() 
		{
			public void actionPerformed(ActionEvent e) {

				//render
				calendar.setLocation(textField.getLocationOnScreen().x, 
						(textField.getLocationOnScreen(). y + textField.getHeight()));

				calendar.setVisible(true);
			}
		});

		WeeklyCalendar c = new WeeklyCalendar();
		cp.add(c);
	}
}







//		    LocalTime time = LocalTime.now();    give me the exact time running
//		    System.out.println(time);  

