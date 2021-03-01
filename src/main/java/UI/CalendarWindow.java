package UI;
import java.awt.BorderLayout;
import java.awt.Container;

import javax.swing.JFrame;

import com.mindfusion.scheduling.Calendar;
import com.mindfusion.scheduling.ThemeType;

public class CalendarWindow  extends JFrame{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	Calendar calendar = new Calendar(); 

	public CalendarWindow() {
		setDefaultCloseOperation(EXIT_ON_CLOSE);
		setSize(235,200);
		calendar.setTheme(ThemeType.Light);

		Container cp = getContentPane();
		cp.setLayout(new BorderLayout());

		cp.add(calendar, BorderLayout.CENTER);



	}

}
