from flask import Flask, jsonify, send_file
from flask_cors import CORS
import matplotlib.pyplot as plt
from io import BytesIO

app = Flask(__name__)
CORS(app)  # Enable CORS for the entire app


@app.route('/chart2')
def generate_chart():
    labels = ['Sent mail to registered', 'Paid for register']
    sizes = [120, 85]
    colors = ['#140C73', '#3A96C9']
    plt.style.use('ggplot')

    # Generate the pie chart without direct labels
    plt.pie(x=sizes, autopct='%.2f%%', startangle=90, colors=colors)
    plt.axis('equal')

    # Adjust legend placement and font size
    plt.legend(labels, loc="upper right", bbox_to_anchor=(1.2, 1), fontsize=25)

    # Add a white circle to create a donut effect
    circle = plt.Circle((0, 0), 0.75, color='#f4e1fa')
    plt.gca().add_artist(circle)

    # Ensure layout is adjusted to fit everything
    plt.tight_layout()

    # Save chart to a BytesIO object
    img = BytesIO()

    plt.savefig(img, format='png', transparent=True)
    img.seek(0)
    plt.close()

    return send_file(img, mimetype='image/png')


if __name__ == '__main__':
    app.run(debug=True)
