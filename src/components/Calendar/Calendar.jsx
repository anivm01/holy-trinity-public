import "./Calendar.scss";
import NoData from "../../components/NoData/NoData";
import { ThreeDots } from "react-loader-spinner";
import { useCalendar } from "../../queries";
import CalendarDisplay from "./CalendarDisplay/CalendarDisplay";

function Calendar() {
  const { data, loading, error } = useCalendar();

  if (loading) {
    return (
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="#6F0B20"
        ariaLabel="three-dots-loading"
        wrapperStyle={{ justifyContent: "center" }}
        wrapperClassName=""
        visible={true}
      />
    );
  }
  if (error) {
    return <NoData />;
  }
  if (data) {
    return (
      <section className="calendar">
        <CalendarDisplay data={data} />
      </section>
    );
  }
}

export default Calendar;
